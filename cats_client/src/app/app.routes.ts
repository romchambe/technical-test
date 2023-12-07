import { Routes, } from '@angular/router';
import { CatListComponent } from "./cats/cat-list/cat-list.component";
import { CreateCatComponent } from './cats/create-cat/create-cat.component';


export const routes: Routes = [
  { path: '', redirectTo: '/cat-list', pathMatch: 'full' },
  { path: 'create-cat', component: CreateCatComponent },
  { path: 'cat-list', component: CatListComponent },
];
