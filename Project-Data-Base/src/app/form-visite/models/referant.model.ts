export class Referant{
  public nom: string;
  public prenom: string;
  public id: number;
  public email: string;

  constructor(nom: string, prenom: string, id: number, email: string) {
    this.nom = nom;
    this.prenom = prenom;
    this.id = id;
    this.email = email;
  }
}
