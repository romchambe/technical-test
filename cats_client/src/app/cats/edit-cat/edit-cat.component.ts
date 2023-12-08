import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { Cat } from "../cat.model";
import { CatFormComponent } from '../cat-form/cat-form.component';
import { CatService } from '../cat.service';

@Component({
  selector: 'app-edit-cat',
  standalone: true,
  imports: [MatDialogModule, CatFormComponent],
  templateUrl: './edit-cat.component.html',
  styleUrl: './edit-cat.component.css'
})
export class EditCatComponent {


  constructor(
    @Inject(MAT_DIALOG_DATA) public cat: Cat,
    public dialogRef: MatDialogRef<EditCatComponent>,
    private catService: CatService
  ) { }

  onSave(updatedCat: Cat): void {
    this.catService.updateCat({ ...this.cat, ...updatedCat }).subscribe({
      next: () => {
        this.dialogRef.close(true);
        this.catService.getCats()
      }
    });
  }
}