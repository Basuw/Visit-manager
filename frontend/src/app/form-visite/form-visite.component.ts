import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
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
import { EtablissementService } from '../Service/etablissement-service';
import { Niveau } from '../models/niveau-model';
import { NiveauService } from '../Service/niveau-service';
import { ReferantService } from '../Service/referant-service';
import { Jeu } from '../models/jeu-model';
import { JeuService } from '../Service/jeu-service';
import { Accompagnateur } from '../models/accompagnateur-model';
import { AccompagnateurService } from '../Service/accompagnateur-service';

/** @title Simple form field */
@Component({
  selector: 'app-form-visite',
  templateUrl: './form-visite.component.html',
  styleUrl: './form-visite.component.scss',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [MatFormFieldModule, MatInputModule, MatSelectModule, MatRadioGroup, MatCheckbox, MatRadioButton, MatButton, ReactiveFormsModule, MatDatepickerModule, MultiSelectModule,FormsModule],
})
export class FormVisiteComponent implements OnInit, OnChanges {
  formulaireForm: FormGroup;
  etablissements: Etablissement[] = [];
  referants: Referant[] = [];
  accompagnateurs: Accompagnateur[] = [];
  jeux: Jeu[] = [];
  niveaux: Niveau[] = [];
  @Input() visit?: Visit;

  constructor(private fb: FormBuilder, private etablissementService: EtablissementService, private niveauService: NiveauService, private referantService: ReferantService, private jeuService: JeuService, private visitService: VisitService, private accompagnateurService: AccompagnateurService) {
    this.formulaireForm = this.fb.group({
      date: ['', Validators.required],
      Remarques: ['', []],
      acc: ['', Validators.required],
      jeux: ['', Validators.required],
      niveau: ['', Validators.required],
      selectedEtablissementsControl: ['', Validators.required],
      selectedReferantControl: ['', Validators.required],
      manifestation : ['', Validators.required]
    });
  }

  
  ngOnInit(): void {
    this.etablissementService.getAllEtablissements().subscribe({
      next: (data: Etablissement[]) => {
        this.etablissements = data;
      },
      error: (error) => {
        console.error('Error fetching etablissements:', error);
      },
      complete: () => {
        console.log('Etablissements fetch complete');
        console.log(this.etablissements);
      }
    });
    this.niveauService.getAll().subscribe({
      next: (data: Niveau[]) => {
        this.niveaux = data;
      },
      error: (error) => {
        console.error('Error fetching niveaux:', error);
      },
      complete: () => {
        console.log('Niveaux fetch complete');
      }
    });
    this.referantService.getAllReferants().subscribe({
      next: (data: Referant[]) => {
        this.referants = data;
      },
      error: (error) => {
        console.error('Error fetching niveaux:', error);
      },
      complete: () => {
        console.log('Niveaux fetch complete');
      }
    });
    this.jeuService.getAllJeux().subscribe({
      next: (data: Jeu[]) => {
        this.jeux = data;
      },
      error: (error) => {
        console.error('Error fetching niveaux:', error);
      },
      complete: () => {
        console.log('Niveaux fetch complete');
      }
    });
    this.accompagnateurService.getAll().subscribe({
      next: (data: Accompagnateur[]) => {
        this.accompagnateurs = data;
      },
      error: (error) => {
        console.error('Error fetching niveaux:', error);
      },
      complete: () => {
        console.log('Niveaux fetch complete');
      }
    });
  }

  onSubmit() {
    if (this.formulaireForm.valid) {
      const formValues = this.formulaireForm.value;
      const referantsSelected: Referant[] = [formValues.selectedReferantControl];
      const etablissementsSelected: Etablissement[] = [formValues.selectedEtablissementsControl];
      const accompagnateurSelected: Accompagnateur[] = [formValues.acc];
      console.log(formValues);
      this.visit = new Visit(null, formValues.date, etablissementsSelected, referantsSelected, accompagnateurSelected, formValues.Remarques, formValues.jeux, formValues.niveau, formValues.manifestation)
      this.visitService.addVisit(this.visit).subscribe({
        next: (data: Visit) => {
          this.visit = data;
        },
        error: (error) => {
          console.error('Error fetching niveaux:', error);
        },
        complete: () => {
          console.log('Niveaux fetch complete');
        }
      });
    } else {
      console.error('Formulaire invalide');
    }
  }
  ngOnChanges(changes: SimpleChanges) {
      if (this.visit) {
        this.formulaireForm.patchValue({
          date: this.visit.date,
          Remarques: this.visit.remarques,
          acc: this.visit.accompagnateur[0],
          jeu: this.visit.jeux,
          niveau: this.visit.niveau,
          selectedEtablissementsControl: this.visit.etablissement[0],
          selectedReferantControl: this.visit.referant[0],
          manifestation: this.visit.manifestation
        });
        this.formulaireForm.controls['selectedReferantControl'].setValue(this.visit.referant[0])
      }
  }

  compareValues(option1: any, option2: any): boolean {
    // Comparaison personnalisée basée sur l'identifiant unique des options
    return option1 && option2 ? option1.id === option2.id : option1 === option2;
  }
}

