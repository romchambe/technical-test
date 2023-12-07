import { Component, OnInit } from "@angular/core";
import { CatService } from "../cat.service";
import { Cat } from "../cat.model";
import { CommonModule } from "@angular/common";
import { CatCardComponent } from "../cat-card/cat-card.component";

@Component({
  selector: "app-cat-list",
  standalone: true,
  imports: [CommonModule, CatCardComponent],
  templateUrl: "./cat-list.component.html",
  styleUrl: "./cat-list.component.css",
})
export class CatListComponent implements OnInit {
  cats: Cat[] = [];

  constructor(private catService: CatService) { }

  ngOnInit(): void {
    this.catService.getCats().subscribe(({ results }) => {
      console.log('received', results)
      if (results) {
        this.cats = results;
      }
    });
  }
}

