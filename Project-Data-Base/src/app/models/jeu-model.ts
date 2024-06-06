export class Jeu {
  public nom: string;
  public idReferent: string;
  public dateAjout: string;
  public idJeu: number;

  constructor(nom: string, idReferent: string, idJeu: number, dateAjout: string) {
    this.nom = nom;
    this.idReferent = idReferent;
    this.idJeu = idJeu;
    this.dateAjout = dateAjout;
  }
}
