import {AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {MatTableDataSource, MatTableModule} from "@angular/material/table";
import {MatIcon} from "@angular/material/icon";
import {MatPaginator, MatPaginatorModule} from "@angular/material/paginator";
import {Etablissement} from "../models/etablissement.model";
import {MatDialog} from "@angular/material/dialog";
import {Visit} from "../models/visit.model";
import {VisitService} from "../Service/visit-service";
import {MatCheckbox} from "@angular/material/checkbox";
import {MatMenu, MatMenuItem, MatMenuTrigger} from "@angular/material/menu";
import {DatePipe} from "@angular/common";
import {MatIconButton} from "@angular/material/button";

@Component({
  selector: 'app-visit-table',
  standalone: true,
  imports: [
    MatTableModule, MatPaginatorModule, MatCheckbox, MatIcon, MatMenuTrigger, MatMenu, DatePipe, MatIconButton, MatMenuItem
  ],
  templateUrl: './visit-table.component.html',
  styleUrl: './visit-table.component.scss'
})
export class VisitTableComponent implements OnInit, AfterViewInit{
  displayedColumns: string[] = ['id', 'date', 'etablissement','referant','accompagnateur','manifestation','remarques','jeux','niveaux','star'];
  dataSource!: MatTableDataSource<Visit>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @Output() editVisit = new EventEmitter<Visit>();

  constructor(public dialog: MatDialog, private visitService: VisitService) {}

  ngOnInit(): void {
    this.visitService.getVisits().subscribe({
      next: (data: Visit[]) => {
        this.dataSource = new MatTableDataSource<Visit>(data);
        console.log(data);
      },
      error: (error) => {
        console.error('Error fetching visits:', error);
      },
      complete: () => {
        console.log('visits fetch complete');
      }
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  edit(element: Visit) {
    this.editVisit.emit(element);
    // Ajoutez votre logique de modification ici
    console.log('Edit:', element);
  }

  delete(element: Visit) {
    this.visitService.deteteVisit(element).subscribe({
      next: (data: String) => {
        console.log(data);  
      },
      error: (error) => {
        console.error('Error fetching niveaux:', error);
      },
      complete: () => {
        console.log('Niveaux fetch complete');
      }
    });
  }
}
