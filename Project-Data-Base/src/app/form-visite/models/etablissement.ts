export class Etablissement{
  private nom: string;
  private ville: string;
  private id: number;

  constructor(nom: string, ville: string, id: number) {
    this.nom = nom;
    this.ville = ville;
    this.id = id;
  }
}
