export class Etablissement {
  public nom: string;
  public ville: string;
  public id: number;

  constructor(nom: string, ville: string, id: number) {
    this.nom = nom;
    this.ville = ville;
    this.id = id;
  }
}
