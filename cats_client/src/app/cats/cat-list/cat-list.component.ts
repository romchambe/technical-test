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
  noNext = true;
  noPrevious = true
  constructor(private catService: CatService, private fb: FormBuilder) {
    this.filterForm = this.fb.group({
      breed: [""],
    });
  }

  ngOnInit(): void {
    this.catService.catsList$.subscribe({
      next: ({ results, next, previous }) => {
        this.noNext = !next
        this.noPrevious = !previous

        if (results) {
          this.cats = results;
        }
      }
    });

    this.catService.getCats()

    // Load filtered data when value changes
    this.filterForm.get("breed")?.valueChanges.subscribe({
      next: (breed) => {
        this.catService.updateBreedFilter(breed)
        this.catService.getCats()
      }
    });
  }

  nextPage(): void {
    this.catService.updatePageParam(this.catService.currentPage++);
    this.catService.getCats()
  }

  previousPage(): void {
    this.catService.updatePageParam(this.catService.currentPage--);
    this.catService.getCats()
  }
}

