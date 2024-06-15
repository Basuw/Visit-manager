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
-- Il faut créer un trigger sur la table jeu qui se déclenche avant la mise a jour de la colonne niveaux.

-- Créer les triggers.



-- Proposer des tests pour montrer que les triggers créés sont efficaces.



-- Quels autres triggers faudrait-il créér pour vérifier la concordance des niveaux
-- entre les jeux et les visites ? (ne pas créer les triggers !)
-- Il faudrait également créer un trigger sur la table visite pour s'assurer que la modification du niveau de la visite reste cohérente.
-- A la selection des jeux pour la visite il en faudrait également un pour etre sur que les jeux ajoutés soient du bon niveau.