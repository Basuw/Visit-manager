import { HttpClient } from "@angular/common/http";
import {Etablissement} from "../models/etablissement.model";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { Jeu } from "../models/jeu-model";

@Injectable({
  providedIn: 'root'
})
export class JeuService{
  private url: string;

  getAllJeux(): Observable<Jeu[]> {
    return this.http.get<Jeu[]>(this.url + '/all');
}

  constructor(private http: HttpClient) {
    this.url = 'http://localhost:8080/jeu';
  }
}
