import { HttpClient } from "@angular/common/http";
import {Etablissement} from "../models/etablissement.model";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { Niveau } from "../models/niveau-model";

@Injectable({
  providedIn: 'root'
})
export class NiveauService{
  private url: string;

  getAll(): Observable<Niveau[]> {
    return this.http.get<Niveau[]>(this.url + '/all');
}

  constructor(private http: HttpClient) {
    this.url = 'http://localhost:8080/niveau';
  }
}
