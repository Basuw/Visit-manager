import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FormVisiteComponent} from "./form-visite/form-visite.component";
import { MatSelectModule } from '@angular/material/select';
import {EtablissementTableComponent} from "./etablissement-table/etablissement-table.component";
import {VisitTableComponent} from "./visit-table/visit-table.component";
import {VisitService} from "./Service/visit-service";
import {Visit} from "./models/visit.model";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormVisiteComponent, MatSelectModule, EtablissementTableComponent, VisitTableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Project-Data-Base';
  visitService = new VisitService();
  selectedVisit?: Visit;

  editVisit(visit: Visit) {
    this.selectedVisit = visit;
  }}
