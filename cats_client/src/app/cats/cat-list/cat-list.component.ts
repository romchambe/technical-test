import { Component, OnInit } from "@angular/core";
import { CatService } from "../cat.service";
import { Cat } from "../cat.model";
import { CommonModule } from "@angular/common";
import { CatCardComponent } from "../cat-card/cat-card.component";
import { FormBuilder, FormGroup, ReactiveFormsModule } from "@angular/forms";
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: "app-cat-list",
  standalone: true,
  imports: [CommonModule, CatCardComponent, ReactiveFormsModule, MatInputModule, MatButtonModule],
  templateUrl: "./cat-list.component.html",
  styleUrl: "./cat-list.component.css",
})
export class CatListComponent implements OnInit {
  cats: Cat[] = [];
  filterForm: FormGroup;
  currentPage = 1;
  noNext = true;

  constructor(private catService: CatService, private fb: FormBuilder) {
    this.filterForm = this.fb.group({
      breed: [""],
    });
  }

  ngOnInit(): void {
    this.loadCats();

    // Load filtered data when value changes
    this.filterForm.get("breed")?.valueChanges.subscribe((breed) => {
      this.currentPage = 1; // Reset to the first page
      this.loadCats(breed);
    });
  }

  loadCats(breed?: string): void {
    this.catService.getCats(this.currentPage, breed).subscribe(
      ({ results, next }) => {
        this.noNext = !next
        console.log(this.noNext)
        if (results) {
          this.cats = results;
        }
      },
      (error) => console.error(error)
    );
  }

  nextPage(): void {
    this.currentPage++;
    this.loadCats(this.filterForm.value.breed);
  }

  previousPage(): void {
    this.currentPage--;
    this.loadCats(this.filterForm.value.breed);
  }
}

