CREATE SEQUENCE Visite_sequence
   START WITH 1
   INCREMENT BY 1;

CREATE TABLE Ville(
   id_ville INTEGER,
   nom VARCHAR(50) ,
   departement SMALLINT,
   PRIMARY KEY(id_ville)
);

CREATE TABLE Accompagnateur(
   IdAccompagnateur INTEGER,
   nom VARCHAR(50) ,
   prenom VARCHAR(50) ,
   telephone SMALLINT,
   mail VARCHAR(50) ,
   fonction VARCHAR(50) ,
   PRIMARY KEY(IdAccompagnateur)
);

CREATE TABLE Professeur(
   id_professeur INTEGER,
   prenom VARCHAR(50) ,
   nom VARCHAR(50) ,
   mail VARCHAR(50) ,
   PRIMARY KEY(id_professeur)
);

CREATE TABLE Niveau(
   niveau VARCHAR(50) ,
   PRIMARY KEY(niveau)
);

CREATE TABLE Thematique(
   thematique VARCHAR(50) ,
   thematique_1 VARCHAR(50) ,
   PRIMARY KEY(thematique),
   FOREIGN KEY(thematique_1) REFERENCES Thematique(thematique)
);

CREATE TABLE Etablissement(
   id_etablissement INTEGER,
   nom VARCHAR(50)  NOT NULL,
   id_ville INTEGER NOT NULL,
   PRIMARY KEY(id_etablissement),
   FOREIGN KEY(id_ville) REFERENCES Ville(id_ville)
);

CREATE TABLE Jeu(
   id_jeu INTEGER,
   nom VARCHAR(50) ,
   dateAjout DATE,
   PRIMARY KEY(id_jeu)
);

CREATE TABLE Visite(
   id_visite INTEGER,
   date_visite DATE,
   manifestation VARCHAR(50) ,
   remarques VARCHAR(100) ,
   niveau VARCHAR(50) ,
   PRIMARY KEY(id_visite)
);

CREATE TABLE Equipe(
   id_visite INTEGER,
   nom VARCHAR(50) ,
   PRIMARY KEY(id_visite, nom),
   FOREIGN KEY(id_visite) REFERENCES Visite(id_visite)
);

CREATE TABLE Partie(
   id_visite INTEGER,
   nom VARCHAR(50) ,
   id_jeu INTEGER,
   temps INTEGER,
   PRIMARY KEY(id_visite, nom, id_jeu),
   FOREIGN KEY(id_visite, nom) REFERENCES Equipe(id_visite, nom),
   FOREIGN KEY(id_jeu) REFERENCES Jeu(id_jeu)
);

CREATE TABLE Accompagne(
   IdAccompagnateur INTEGER,
   id_visite INTEGER,
   PRIMARY KEY(IdAccompagnateur, id_visite),
   FOREIGN KEY(IdAccompagnateur) REFERENCES Accompagnateur(IdAccompagnateur),
   FOREIGN KEY(id_visite) REFERENCES Visite(id_visite)
);

CREATE TABLE Referent(
   id_visite INTEGER,
   id_professeur INTEGER,
   PRIMARY KEY(id_visite, id_professeur),
   FOREIGN KEY(id_visite) REFERENCES Visite(id_visite),
   FOREIGN KEY(id_professeur) REFERENCES Professeur(id_professeur)
);

CREATE TABLE Est_adapte(
   id_jeu INTEGER,
   niveau VARCHAR(50) ,
   PRIMARY KEY(id_jeu, niveau),
   FOREIGN KEY(id_jeu) REFERENCES Jeu(id_jeu),
   FOREIGN KEY(niveau) REFERENCES Niveau(niveau)
);

CREATE TABLE Aborde(
   id_jeu INTEGER,
   thematique VARCHAR(50) ,
   PRIMARY KEY(id_jeu, thematique),
   FOREIGN KEY(id_jeu) REFERENCES Jeu(id_jeu),
   FOREIGN KEY(thematique) REFERENCES Thematique(thematique)
);

CREATE TABLE Contient(
   id_jeu INTEGER,
   id_visite INTEGER,
   PRIMARY KEY(id_jeu, id_visite),
   FOREIGN KEY(id_jeu) REFERENCES Jeu(id_jeu),
   FOREIGN KEY(id_visite) REFERENCES Visite(id_visite)
);

CREATE TABLE Jeu_Professeur(
    id_jeu INTEGER,
    id_professeur INTEGER,
    PRIMARY KEY(id_jeu, id_professeur),
    FOREIGN KEY(id_jeu) REFERENCES Jeu(id_jeu),
    FOREIGN KEY(id_professeur) REFERENCES Professeur(id_professeur)
);

CREATE TABLE Visite_Etablissement(
    id_visite INTEGER,
    id_etablissement INTEGER,
    PRIMARY KEY (id_visite, id_etablissement),
    FOREIGN KEY(id_visite) REFERENCES Visite(id_visite),
    FOREIGN KEY(id_etablissement) REFERENCES Etablissement(id_etablissement)
);

INSERT INTO Niveau(niveau) VALUES ('college');
INSERT INTO Niveau(niveau) VALUES ('lycee');
INSERT INTO Niveau(niveau) VALUES ('superieur');

-- Ajout des villes autour de Clermont-Ferrand
INSERT INTO Ville (id_ville, nom, departement) VALUES (1, 'Clermont-Ferrand', 63);
INSERT INTO Ville (id_ville, nom, departement) VALUES (2, 'Chamalières', 63);
INSERT INTO Ville (id_ville, nom, departement) VALUES (3, 'Aubière', 63);
INSERT INTO Ville (id_ville, nom, departement) VALUES (4, 'Cournon-d Auvergne', 63);
INSERT INTO Ville (id_ville, nom, departement) VALUES (5, 'Riom', 63);

-- Ajout des établissements
INSERT INTO Etablissement (id_etablissement, nom, id_ville) VALUES (1, 'Collège Blaise Pascal', 1);
INSERT INTO Etablissement (id_etablissement, nom, id_ville) VALUES (2, 'Lycée Général Desaix', 1);
INSERT INTO Etablissement (id_etablissement, nom, id_ville) VALUES (3, 'Université Clermont Auvergne', 1);

INSERT INTO Etablissement (id_etablissement, nom, id_ville) VALUES (4, 'Collège Saint-Alyre', 2);
INSERT INTO Etablissement (id_etablissement, nom, id_ville) VALUES (5, 'Lycée Sainte-Thérèse', 2);
INSERT INTO Etablissement (id_etablissement, nom, id_ville) VALUES (6, 'Institut des Sciences de la Vie', 2);

INSERT INTO Etablissement (id_etablissement, nom, id_ville) VALUES (7, 'Collège Gérard Philipe', 3);
INSERT INTO Etablissement (id_etablissement, nom, id_ville) VALUES (8, 'Lycée Pierre de Fermat', 3);
INSERT INTO Etablissement (id_etablissement, nom, id_ville) VALUES (9, 'Ecole d Ingénieurs Sigma', 3);

INSERT INTO Professeur (id_professeur, nom, prenom) VALUES (0, 'PASTOR', 'Lucas');
INSERT INTO Professeur (id_professeur, nom, prenom) VALUES (1, 'CHEMINAT', 'Michel');
INSERT INTO Professeur (id_professeur, nom, prenom) VALUES (2, 'YON', 'Loïc');

INSERT INTO Jeu (id_jeu, nom, dateAjout) VALUES (1, 'Code Master', '2024-01-15');
INSERT INTO Jeu (id_jeu, nom, dateAjout) VALUES (2, 'Bug Hunter', '2024-02-20');
INSERT INTO Jeu (id_jeu, nom, dateAjout) VALUES (3, 'AI Conquest', '2024-03-05');
INSERT INTO Jeu (id_jeu, nom, dateAjout) VALUES (4, 'Network Tycoon', '2024-04-10');
INSERT INTO Jeu (id_jeu, nom, dateAjout) VALUES (5, 'Cyber Defense', '2024-05-15');