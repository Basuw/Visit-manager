import {Component, OnInit} from '@angular/core';
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
import { EtablissementModel } from './models/etablissement.model';
import {Referant} from "./models/referant.model";

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
  etablissements: EtablissementModel[] = [];
  referants: Referant[] = [];

  constructor(private fb: FormBuilder) {
    this.formulaireForm = this.fb.group({
      nom: ['', Validators.required],
      date: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      age: ['', [Validators.required, Validators.min(1)]],
      sexe: ['', Validators.required],
      newsletter: ['oui', Validators.required],
      terms: [false, Validators.requiredTrue],
      selectedEtablissementsControl: [false, Validators.requiredTrue],
    });
  }

  ngOnInit(): void {
    this.etablissements = [
      new EtablissementModel('EtablissementModel 1', 'Paris', 1),
      new EtablissementModel('EtablissementModel 2', 'Lyon', 2),
      new EtablissementModel('EtablissementModel 3', 'Marseille', 3)
    ];
    this.referants = [
      new Referant('Referant 1', 'Referant 1', 1, 'monemail@gmail.com'),
      new Referant('Referant 2', 'Referant 2', 2, 'monemail@gmail.com'),
      new Referant('Referant 3', 'Referant 3', 3, 'monemail@gmail.com')
    ];
  }

  onSubmit() {
    if (this.formulaireForm.valid) {
      console.log(this.formulaireForm.value);
    } else {
      console.error('Formulaire invalide');
    }
  }
}
