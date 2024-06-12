export class Jeu {
  public nom: string;
  public idReferent: string;
  public dateAjout: string;
  public id: number;

  constructor(nom: string, idReferent: string, id: number, dateAjout: string) {
    this.nom = nom;
    this.idReferent = idReferent;
    this.id = id;
    this.dateAjout = dateAjout;
  }
}
