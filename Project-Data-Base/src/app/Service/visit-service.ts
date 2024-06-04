import {Visit} from "../models/visit.model";
import {Referant} from "../models/referant.model";
import {Etablissement} from "../models/etablissement.model";
import {Injectable} from "@angular/core";

@Injectable()
export class VisitService{
    public visits: Visit[] = [];

    constructor() {
      this.visits = [
        new Visit(0,new Date(), new Etablissement('Etablissement 1', 'Paris', 1), new Referant('Simon', 'Carine', 1, 'email@gmail.com'), 'Lea Simonet', 'Remarques 1', ['Attrapes les tous'], ['Niveaux 1']),
        new Visit(1,new Date(), new Etablissement('Etablissement 2', 'Paris', 1), new Referant('Durand', 'Anais', 1, 'email@gmail.com'), 'Franck Pert', 'Remarques 1', ['PacIT'], ['Niveaux 1']),
        new Visit(2,new Date(), new Etablissement('Etablissement 3', 'Paris', 1), new Referant('Mielcarek', 'Patrick', 1, 'email@gmail.com'), 'Noa Francois', 'Remarques 1', ['SpiderBinaire'], ['Niveaux 1'])
      ]
    }

  public addVisit(visit: Visit) {
    this.visits.push(visit);
  }
  public updateVisit(visit: Visit) {

  }
  public deteteVisit(element: Visit) {

  }
  public getVisitById(id: number) {

  }
  public getVisits() {

  }
}
