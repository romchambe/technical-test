import { Routes } from '@angular/router';
import { CatFormComponent } from "./cats/cat-form/cat-form.component";
import { CatListComponent } from "./cats/cat-list/cat-list.component";

export const routes: Routes = [
  { path: "create-cat", component: CatFormComponent },
  { path: "cat-list", component: CatListComponent },
];
