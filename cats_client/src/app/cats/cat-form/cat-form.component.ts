import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { CatService } from "../cat.service";
import { Cat } from "../cat.model";
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: "app-cat-form",
  standalone: true,
  templateUrl: "./cat-form.component.html",
  styleUrls: ["./cat-form.component.css"],
  imports: [ReactiveFormsModule],
})
export class CatFormComponent {
  catForm: FormGroup;

  constructor(private fb: FormBuilder, private catService: CatService) {
    this.catForm = this.fb.group({
      name: ["", Validators.required],
      breed: ["", Validators.required],
      birthday: ["", Validators.required],
    });
  }

  onSubmit(): void {
    if (this.catForm.valid) {
      const newCat: Cat = this.catForm.value;
      this.catService.createCat(newCat).subscribe(
        (response) => {
          console.log("Cat created:", response);
          this.catForm.reset(); // reset the form after submitting
        },
        (error) => {
          console.error("Error creating cat:", error);
        }
      );
    }
  }
}