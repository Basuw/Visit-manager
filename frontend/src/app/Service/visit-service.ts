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
    private url: string;

    constructor(private http: HttpClient) {
      this.url = 'http://localhost:8080/visite/'
    }

  public addVisit(visit: Visit): Observable<Visit> {
    console.log(visit);
    return this.http.post<Visit>(this.url, visit);
  }
  public updateVisit(visit: Visit): Observable<Visit> {
    return this.http.put<Visit>(this.url, visit);
  }
  public deteteVisit(element: Visit): Observable<String> {
    return this.http.delete<String>(this.url + element.id?.toString());
  }
  public getVisitById(id: number) {

  }
  public getVisits(): Observable<Visit[]> {
    return this.http.get<Visit[]>(this.url + 'all');
  }
}
