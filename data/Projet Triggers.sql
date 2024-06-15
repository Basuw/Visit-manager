-- Créer le(s) trigger(s) qui doivent être déclenchés lorsqu'on modifie les niveaux
-- d'un jeu afin de s'assurer que cela ne pose pas de problème au niveau des visites.

-- Exemple concret :
-- Le jeu A est de niveaux école et collège.
-- Il y a une visite V niveau école avec ce jeu.
-- Il n'y a pas de visite niveau collège avec ce jeu.
-- On veut modifier les niveaux du jeu A.
-- Par exemple, on ne doit pas pouvoir enlever le niveau école du jeu A
-- à cause de la visite V.

-- Quels triggers faut-il créer ? quelles actions sur quelles tables ?

-- Créer les triggers.

CREATE OR REPLACE FUNCTION check_delete_niveau() RETURNS trigger AS $$
BEGIN
    IF EXISTS (
        SELECT 1
        FROM Visite v
                 JOIN Contient c ON v.id_visite = c.id_visite
        WHERE c.id_jeu = OLD.id_jeu AND v.niveau = OLD.niveau
    ) THEN
        RAISE EXCEPTION 'Cannot delete level % for game % because there are visits associated with this level.', OLD.niveau, OLD.id_jeu;
    END IF;
    RETURN OLD;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER before_delete_niveau
    BEFORE DELETE ON Est_adapte
    FOR EACH ROW
EXECUTE FUNCTION check_delete_niveau();

-- Proposer des tests pour montrer que les triggers créés sont efficaces.

-- Test de suppression d'un niveau sans visites associées :
-- Ajouter un jeu avec un niveau.
-- Ajouter une visite pour ce jeu avec un autre niveau.
-- Essayer de supprimer le niveau initial du jeu (devrait réussir).

-- Ajouter un nouveau jeu et des niveaux
INSERT INTO Jeu (id_jeu, nom, dateAjout) VALUES (6, 'Quantum Leap', '2024-06-01');
INSERT INTO Est_adapte (id_jeu, niveau) VALUES (6, 'college');
INSERT INTO Est_adapte (id_jeu, niveau) VALUES (6, 'lycee');

-- Ajouter une visite associée au jeu mais avec un niveau différent
INSERT INTO Visite (id_visite, date_visite, manifestation, remarques, niveau) VALUES (1, '2024-06-10', 'Science Fair', '', 'lycee');
INSERT INTO Contient (id_jeu, id_visite) VALUES (6, 1);

-- Essayer de supprimer le niveau 'college' du jeu 'Quantum Leap'
DELETE FROM Est_adapte WHERE id_jeu = 6 AND niveau = 'college'; -- devrait réussir

-- Test de suppression d'un niveau avec des visites associées :
-- Ajouter un jeu avec un niveau.
-- Ajouter une visite pour ce jeu avec le même niveau.
-- Essayer de supprimer le niveau initial du jeu (devrait échouer).

-- Ajouter un autre jeu et des niveaux
INSERT INTO Jeu (id_jeu, nom, dateAjout) VALUES (7, 'Cyber Quest', '2024-06-01');
INSERT INTO Est_adapte (id_jeu, niveau) VALUES (7, 'superieur');

-- Ajouter une visite associée au jeu avec le même niveau
INSERT INTO Visite (id_visite, date_visite, manifestation, remarques, niveau) VALUES (2, '2024-06-15', 'Hackathon', '', 'superieur');
INSERT INTO Contient (id_jeu, id_visite) VALUES (7, 2);

-- Essayer de supprimer le niveau 'superieur' du jeu 'Cyber Quest'
DELETE FROM Est_adapte WHERE id_jeu = 7 AND niveau = 'superieur'; -- devrait échouer

-- Quels autres triggers faudrait-il créér pour vérifier la concordance des niveaux
-- entre les jeux et les visites ? (ne pas créer les triggers !)

-- Autres triggers à créer pour vérifier la concordance des niveaux entre les jeux et les visites :
-- 1. Trigger sur l'insertion/mise à jour de visites : Vérifier que le niveau de la visite est associé à tous les jeux contenus dans cette visite.
-- 2. Trigger sur l'insertion/mise à jour de la table 'Contient' : Vérifier que le niveau de la visite est un niveau associé au jeu ajouté.
