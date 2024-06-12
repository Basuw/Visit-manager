import { HttpClient } from "@angular/common/http";
import {Referant} from "../models/referant.model";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { Accompagnateur } from "../models/accompagnateur-model";

@Injectable({
  providedIn: 'root'
})
export class AccompagnateurService{
  private url: string;

  getAll(): Observable<Accompagnateur[]> {
    return this.http.get<Accompagnateur[]>(this.url + '/all');
}

  constructor(private http: HttpClient) {
    this.url = 'http://localhost:8080/accompagnateur';
  }
}
