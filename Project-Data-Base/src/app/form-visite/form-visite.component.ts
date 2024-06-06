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
import {visit} from "@angular/compiler-cli/src/ngtsc/util/src/visitor";
import { EtablissementService } from '../Service/etablissement-service';
import { Niveau } from '../models/niveau-model';
import { NiveauService } from '../Service/niveau-service';

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
  jeux: string[] = [];
  niveaux: Niveau[] = [];
  accompagnateurs: string[] = [];
  @Input() visitService!: VisitService;
  @Input() visit?: Visit;

  constructor(private fb: FormBuilder, private etablissementService: EtablissementService, private niveauService: NiveauService) {
    this.formulaireForm = this.fb.group({
      date: ['', Validators.required],
      Remarques: ['', [Validators.required]],
      acc: ['', Validators.required],
      jeu: ['', Validators.required],
      niveau: ['', Validators.required],
      selectedEtablissementsControl: ['', Validators.required],
      selectedReferantControl: ['', Validators.required],
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
    this.referants = [
      new Referant('Referant 1', 'Referant 1', 1, 'monemail@gmail.com'),
      new Referant('Referant 2', 'Referant 2', 2, 'monemail@gmail.com'),
      new Referant('Referant 3', 'Referant 3', 3, 'monemail@gmail.com')
    ];
    this.jeux = ["Attrapes les tous", "PacIT", "SpiderBinaire"];
    this.accompagnateurs = ["Lea Simonet", "Franck Pert", "Noa Francois","Simon Carine", "Durand Anais", "Mielcarek Patrick"];
  }

  onSubmit() {
    if (this.formulaireForm.valid) {
      console.log(this.formulaireForm.value);
      console.log(this.visit);
    } else {
      console.error('Formulaire invalide');
    }
  }
  ngOnChanges(changes: SimpleChanges) {
      if (this.visit) {
        this.formulaireForm.patchValue({
          date: this.visit.date,
          Remarques: this.visit.remarques,
          acc: this.visit.accompagnateur,
          jeu: this.visit.jeux,
          niveau: this.visit.niveaux,
          selectedEtablissementsControl: this.visit.etablissement,
          selectedReferantControl: this.visit.referant,
        });
      }

  }
}
