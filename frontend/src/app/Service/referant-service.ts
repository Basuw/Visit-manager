import { HttpClient } from "@angular/common/http";
import {Referant} from "../models/referant.model";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class ReferantService{
  private url: string;

  getAllReferants(): Observable<Referant[]> {
    return this.http.get<Referant[]>(this.url + '/all');
}

  constructor(private http: HttpClient) {
    this.url = 'http://localhost:8080/professeur';
  }
}
