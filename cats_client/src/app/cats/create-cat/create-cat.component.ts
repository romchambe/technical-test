import { Component, } from '@angular/core';
import { CatFormComponent } from '../cat-form/cat-form.component';
import { CatWithoutId } from '../cat.model';
import { CatService } from '../cat.service';

@Component({
  selector: 'app-create-cat',
  standalone: true,
  imports: [CatFormComponent],
  templateUrl: './create-cat.component.html',
  styleUrl: './create-cat.component.css'
})
export class CreateCatComponent {
  constructor(private catService: CatService) { }

  onSave(createdCat: CatWithoutId): void {
    this.catService.createCat(createdCat).subscribe(
      (response) => {
        console.log("Cat created:", response);
      },
      (error) => {
        console.error("Error creating cat:", error);
      }
    );
  }
}