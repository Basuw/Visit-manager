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
   idVisite INTEGER,
   dateVisite DATE,
   manifestation VARCHAR(50) ,
   remarques VARCHAR(100) ,
   niveau VARCHAR(50) ,
   idEtablissement INTEGER NOT NULL,
   PRIMARY KEY(idVisite)
);

CREATE TABLE Equipe(
   idVisite INTEGER,
   nom VARCHAR(50) ,
   PRIMARY KEY(idVisite, nom),
   FOREIGN KEY(idVisite) REFERENCES Visite(idVisite)
);

CREATE TABLE Partie(
   idVisite INTEGER,
   nom VARCHAR(50) ,
   idJeu INTEGER,
   temps INTEGER,
   PRIMARY KEY(idVisite, nom, idJeu),
   FOREIGN KEY(idVisite, nom) REFERENCES Equipe(idVisite, nom),
   FOREIGN KEY(idJeu) REFERENCES Jeu(idJeu)
);

CREATE TABLE Accompagne(
   IdAccompagnateur INTEGER,
   idVisite INTEGER,
   PRIMARY KEY(IdAccompagnateur, idVisite),
   FOREIGN KEY(IdAccompagnateur) REFERENCES Accompagnateur(IdAccompagnateur),
   FOREIGN KEY(idVisite) REFERENCES Visite(idVisite)
);

CREATE TABLE Referent(
   idVisite INTEGER,
   idProfesseur INTEGER,
   PRIMARY KEY(idVisite, idProfesseur),
   FOREIGN KEY(idVisite) REFERENCES Visite(idVisite),
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
   idVisite INTEGER,
   PRIMARY KEY(idJeu, idVisite),
   FOREIGN KEY(idJeu) REFERENCES Jeu(idJeu),
   FOREIGN KEY(idVisite) REFERENCES Visite(idVisite)
);

CREATE TABLE Jeu_Professeur(
    idJeu INTEGER,
    idProfesseur INTEGER,
    PRIMARY KEY(idJeu, idProfesseur),
    FOREIGN KEY(idJeu) REFERENCES Jeu(idJeu),
    FOREIGN KEY(idProfesseur) REFERENCES Professeur(idProfesseur)
);

CREATE TABLE Visite_Etablissement(
    idVisite INTEGER,
    idEtablissement INTEGER,
    FOREIGN KEY(idVisite) REFERENCES Visite(idVisite),
    FOREIGN KEY(idEtablissement) REFERENCES Etablissement(idEtablissement)
);
