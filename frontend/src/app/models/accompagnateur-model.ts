export class Accompagnateur{
  public nom: string;
  public prenom: string;
  public id: number;
  public mail: string;
  public fonction : string;
  public telephone : string;

  constructor(nom: string, prenom: string, id: number, email: string, fonction: string, telephone: string) {
    this.nom = nom;
    this.prenom = prenom;
    this.id = id;
    this.mail = email;
    this.fonction = fonction;
    this.telephone = telephone;
  }
}
