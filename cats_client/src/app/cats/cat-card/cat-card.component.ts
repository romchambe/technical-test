import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Cat } from '../cat.model';
import { MatDialog, MatDialogModule } from "@angular/material/dialog";
import { EditCatComponent } from '../edit-cat/edit-cat.component';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-cat-card',
  standalone: true,
  imports: [EditCatComponent, MatButtonModule, MatDialogModule],
  templateUrl: './cat-card.component.html',
  styleUrl: './cat-card.component.css'
})
export class CatCardComponent implements OnInit {
  @Input() cat!: Cat;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    console.log(this.cat)
  }

  openEditDialog(): void {
    console.log(this.cat)
    this.dialog.open(EditCatComponent, {
      data: this.cat,
    });
  }
}