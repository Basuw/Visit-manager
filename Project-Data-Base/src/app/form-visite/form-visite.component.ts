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
import { Etablissement } from './models/etablissement';

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
  etablissements: Etablissement[] = [
    new Etablissement('Etablissement 1', 'Paris', 1),
    new Etablissement('Etablissement 2', 'Lyon', 2),
    new Etablissement('Etablissement 3', 'Marseille', 3)
  ];
  selected_etablissements: Etablissement[]
  
  constructor(private fb: FormBuilder) {
    this.selected_etablissements = [];
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

  }

  onSubmit() {
    if (this.formulaireForm.valid) {
      console.log(this.formulaireForm.value);
    } else {
      console.error('Formulaire invalide');
    }
  }
}
