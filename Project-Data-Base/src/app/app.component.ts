import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FormVisiteComponent} from "./form-visite/form-visite.component";
import { MatSelectModule } from '@angular/material/select';
import {EtablissementTableComponent} from "./etablissement-table/etablissement-table.component";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormVisiteComponent, MatSelectModule, EtablissementTableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Project-Data-Base';
}
