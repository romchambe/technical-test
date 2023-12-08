import { Component, Input, } from '@angular/core';
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
export class CatCardComponent {
  @Input() cat!: Cat;

  constructor(public dialog: MatDialog) { }

  openEditDialog(): void {
    this.dialog.open(EditCatComponent, {
      data: this.cat,
    });
  }
}