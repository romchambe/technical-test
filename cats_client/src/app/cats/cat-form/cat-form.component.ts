import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Cat } from "../cat.model";
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: "app-cat-form",
  standalone: true,
  templateUrl: "./cat-form.component.html",
  styleUrls: ["./cat-form.component.css"],
  imports: [ReactiveFormsModule, MatButtonModule, MatInputModule,],
})
export class CatFormComponent implements OnInit {
  @Input() cat?: Cat
  @Output() formSubmit = new EventEmitter<Cat>();
  catForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.catForm = this.fb.group({
      name: ["", Validators.required],
      breed: ["", Validators.required],
      birthday: ["", Validators.required],
    });
  }
  ngOnInit(): void {
    if (this.cat) {
      // Prepopulate the form if we're in edit mode
      this.catForm.patchValue(this.cat);
    }
  }

  onSubmit(): void {
    if (this.catForm.valid) {
      this.formSubmit.emit(this.catForm.value);
    }
  }
}