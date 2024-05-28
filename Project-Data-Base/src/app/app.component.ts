import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FormVisiteComponent} from "./form-visite/form-visite.component";
import { MatSelectModule } from '@angular/material/select';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormVisiteComponent,MatSelectModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Project-Data-Base';
}
