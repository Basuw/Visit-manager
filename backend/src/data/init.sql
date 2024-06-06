CREATE SEQUENCE Visite_sequence
   START WITH 1
   INCREMENT BY 1;

CREATE TABLE Ville(
   idVille INTEGER,
   nom VARCHAR(50) ,
   departement SMALLINT,
   PRIMARY KEY(idVille)
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
   idProfesseur INTEGER,
   prenom VARCHAR(50) ,
   nom VARCHAR(50) ,
   mail VARCHAR(50) ,
   PRIMARY KEY(idProfesseur)
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
   idEtablissement INTEGER,
   nom VARCHAR(50)  NOT NULL,
   idVille INTEGER NOT NULL,
   PRIMARY KEY(idEtablissement),
   FOREIGN KEY(idVille) REFERENCES Ville(idVille)
);

CREATE TABLE Jeu(
   idJeu INTEGER,
   nom VARCHAR(50) ,
   dateAjout DATE,
   idProfesseur INTEGER NOT NULL,
   PRIMARY KEY(idJeu)
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
   idJeu INTEGER,
   temps INTEGER,
   PRIMARY KEY(id_visite, nom, idJeu),
   FOREIGN KEY(id_visite, nom) REFERENCES Equipe(id_visite, nom),
   FOREIGN KEY(idJeu) REFERENCES Jeu(idJeu)
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
   idProfesseur INTEGER,
   PRIMARY KEY(id_visite, idProfesseur),
   FOREIGN KEY(id_visite) REFERENCES Visite(id_visite),
   FOREIGN KEY(idProfesseur) REFERENCES Professeur(idProfesseur)
);

CREATE TABLE Est_adapte(
   idJeu INTEGER,
   niveau VARCHAR(50) ,
   PRIMARY KEY(idJeu, niveau),
   FOREIGN KEY(idJeu) REFERENCES Jeu(idJeu),
   FOREIGN KEY(niveau) REFERENCES Niveau(niveau)
);

CREATE TABLE Aborde(
   idJeu INTEGER,
   thematique VARCHAR(50) ,
   PRIMARY KEY(idJeu, thematique),
   FOREIGN KEY(idJeu) REFERENCES Jeu(idJeu),
   FOREIGN KEY(thematique) REFERENCES Thematique(thematique)
);

CREATE TABLE Contient(
   idJeu INTEGER,
   id_visite INTEGER,
   PRIMARY KEY(idJeu, id_visite),
   FOREIGN KEY(idJeu) REFERENCES Jeu(idJeu),
   FOREIGN KEY(id_visite) REFERENCES Visite(id_visite)
);

CREATE TABLE Jeu_Professeur(
    idJeu INTEGER,
    idProfesseur INTEGER,
    PRIMARY KEY(idJeu, idProfesseur),
    FOREIGN KEY(idJeu) REFERENCES Jeu(idJeu),
    FOREIGN KEY(idProfesseur) REFERENCES Professeur(idProfesseur)
);

CREATE TABLE Visite_Etablissement(
    id_visite INTEGER,
    idEtablissement INTEGER,
    FOREIGN KEY(id_visite) REFERENCES Visite(id_visite),
    FOREIGN KEY(idEtablissement) REFERENCES Etablissement(idEtablissement)
);

INSERT INTO Niveau(niveau) VALUES ('college');
INSERT INTO Niveau(niveau) VALUES ('lycee');
INSERT INTO Niveau(niveau) VALUES ('superieur');

-- Ajout des villes autour de Clermont-Ferrand
INSERT INTO Ville (idVille, nom, departement) VALUES (1, 'Clermont-Ferrand', 63);
INSERT INTO Ville (idVille, nom, departement) VALUES (2, 'Chamalières', 63);
INSERT INTO Ville (idVille, nom, departement) VALUES (3, 'Aubière', 63);
INSERT INTO Ville (idVille, nom, departement) VALUES (4, 'Cournon-d Auvergne', 63);
INSERT INTO Ville (idVille, nom, departement) VALUES (5, 'Riom', 63);

-- Ajout des établissements
INSERT INTO Etablissement (idEtablissement, nom, idVille) VALUES (1, 'Collège Blaise Pascal', 1);
INSERT INTO Etablissement (idEtablissement, nom, idVille) VALUES (2, 'Lycée Général Desaix', 1);
INSERT INTO Etablissement (idEtablissement, nom, idVille) VALUES (3, 'Université Clermont Auvergne', 1);

INSERT INTO Etablissement (idEtablissement, nom, idVille) VALUES (4, 'Collège Saint-Alyre', 2);
INSERT INTO Etablissement (idEtablissement, nom, idVille) VALUES (5, 'Lycée Sainte-Thérèse', 2);
INSERT INTO Etablissement (idEtablissement, nom, idVille) VALUES (6, 'Institut des Sciences de la Vie', 2);

INSERT INTO Etablissement (idEtablissement, nom, idVille) VALUES (7, 'Collège Gérard Philipe', 3);
INSERT INTO Etablissement (idEtablissement, nom, idVille) VALUES (8, 'Lycée Pierre de Fermat', 3);
INSERT INTO Etablissement (idEtablissement, nom, idVille) VALUES (9, 'Ecole d Ingénieurs Sigma', 3);