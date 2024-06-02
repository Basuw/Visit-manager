import {Etablissement} from "../models/etablissement.model";

export class EtablissementService{
/*    constructor(http) {
        this.http = http;
        this.url = 'http://localhost:8080/etablissement';
    }
    getAllEtablissements() {
        return this.http.get(this.url + '/all');
    }
    getEtablissementById(id) {
        return this.http.get(this.url + '/get/' + id);
    }
    addEtablissement(etablissement) {
        return this.http.post(this.url + '/add', etablissement);
    }
    updateEtablissement(etablissement) {
        return this.http.put(this.url + '/update', etablissement);
    }
    deleteEtablissement(id) {
        return this.http.delete(this.url + '/delete/' + id);
    }*/
  public etablissements: Etablissement[] = [];

  constructor() {
    this.etablissements = [
      new Etablissement('Etablissement 1', 'Paris', 1),
      new Etablissement('Etablissement 2', 'Lyon', 2),
      new Etablissement('Etablissement 3', 'Marseille', 3)
    ];
  }
}