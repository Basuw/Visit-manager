import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { Etablissement} from '../models/etablissement.model';
import {MatCheckbox} from "@angular/material/checkbox";
import {MatIcon} from "@angular/material/icon";
import {MatMenu, MatMenuTrigger} from "@angular/material/menu";
import {EtablissementService} from "../Service/etablissement-service";


@Component({

  selector: 'app-etablissement-table',
  standalone: true,
  imports: [
    MatTableModule, MatPaginatorModule, MatCheckbox, MatIcon, MatMenuTrigger, MatMenu
  ],
  templateUrl: './etablissement-table.component.html',
  styleUrl: './etablissement-table.component.scss'

})
export class EtablissementTableComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['id', 'nom', 'ville','star'];
  dataSource = new MatTableDataSource<Etablissement>([]);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(public dialog: MatDialog) {}

  ngOnInit() {
    this.dataSource = new MatTableDataSource<Etablissement>(new EtablissementService().etablissements);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  edit(element: Etablissement) {
    // Ajoutez votre logique de modification ici
    console.log('Edit:', element);
  }

  delete(element: Etablissement) {
    // Ajoutez votre logique de suppression ici
    console.log('Delete:', element);
  }
}
