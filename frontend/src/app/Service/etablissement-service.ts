import { HttpClient } from "@angular/common/http";
import {Etablissement} from "../models/etablissement.model";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class EtablissementService{
  private url: string;

  getAllEtablissements(): Observable<Etablissement[]> {
    return this.http.get<Etablissement[]>(this.url + '/all');
}

  constructor(private http: HttpClient) {
    this.url = 'http://localhost:8080/etablissement';
  }
}
