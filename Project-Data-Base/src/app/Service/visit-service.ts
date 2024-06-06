import {Visit} from "../models/visit.model";
import {Referant} from "../models/referant.model";
import {Etablissement} from "../models/etablissement.model";
import {Injectable} from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class VisitService{
    private url: String;

    constructor(private http: HttpClient) {
      this.url = 'http://localhost:8080/visite/'
    }

  public addVisit(visit: Visit) {
  }
  public updateVisit(visit: Visit) {

  }
  public deteteVisit(element: Visit) {
    this.http.delete(this.url + element.id.toString());
  }
  public getVisitById(id: number) {

  }
  public getVisits(): Observable<Visit[]> {
    return this.http.get<Visit[]>(this.url + 'all');
  }
}
