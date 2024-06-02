import {Component, Input, OnInit} from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
import {MatRadioButton, MatRadioGroup} from "@angular/material/radio";
import {MatCheckbox} from "@angular/material/checkbox";
import {MatButton} from "@angular/material/button";
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {provideNativeDateAdapter} from '@angular/material/core';
import { MultiSelectModule } from 'primeng/multiselect';
import { Etablissement } from '../models/etablissement.model';
import {Referant} from "../models/referant.model";
import {VisitService} from "../Service/visit-service";
import {Visit} from "../models/visit.model";

/** @title Simple form field */
@Component({
  selector: 'app-form-visite',
  templateUrl: './form-visite.component.html',
  styleUrl: './form-visite.component.scss',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [MatFormFieldModule, MatInputModule, MatSelectModule, MatRadioGroup, MatCheckbox, MatRadioButton, MatButton, ReactiveFormsModule, MatDatepickerModule, MultiSelectModule,FormsModule],
})
export class FormVisiteComponent implements OnInit {
  formulaireForm: FormGroup;
  etablissements: Etablissement[] = [];
  referants: Referant[] = [];
  jeux: string[] = [];
  niveaux: string[] = [];
  accompagnateurs: string[] = [];
  @Input() visitService!: VisitService;
  @Input() visit?: Visit;

  constructor(private fb: FormBuilder) {
    this.formulaireForm = this.fb.group({
      nom: ['', Validators.required],
      date: ['', Validators.required],
      Remarques: ['', [Validators.required]],
      age: ['', [Validators.required, Validators.min(1)]],
      acc: ['', Validators.required],
      jeu: ['', Validators.required],
      niveau: ['', Validators.required],
      selectedEtablissementsControl: ['', Validators.required],
      selectedReferantControl: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.etablissements = [
      new Etablissement('Etablissement 1', 'Paris', 1),
      new Etablissement('Etablissement 2', 'Lyon', 2),
      new Etablissement('Etablissement 3', 'Marseille', 3)
    ];
    this.referants = [
      new Referant('Referant 1', 'Referant 1', 1, 'monemail@gmail.com'),
      new Referant('Referant 2', 'Referant 2', 2, 'monemail@gmail.com'),
      new Referant('Referant 3', 'Referant 3', 3, 'monemail@gmail.com')
    ];
    this.jeux = ["Attrapes les tous", "PacIT", "SpiderBinaire"];
    this.niveaux = ["Niveau 1", "Niveau 2", "Niveau 3"];
    this.accompagnateurs = ["Lea Simonet", "Franck Pert", "Noa Francois","Simon Carine", "Durand Anais", "Mielcarek Patrick"];
  }

  onSubmit() {
    if (this.formulaireForm.valid) {
      console.log(this.formulaireForm.value);
    } else {
      console.error('Formulaire invalide');
    }
  }
}
