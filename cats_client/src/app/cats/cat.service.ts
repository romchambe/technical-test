import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Cat } from "./cat.model";
import { PaginatedList } from '../api/utils';

@Injectable({
  providedIn: 'root',
})
export class CatService {

  private catsUrl = "http://localhost:8000/v1/cats";

  constructor(private http: HttpClient) { }

  createCat(cat: Cat): Observable<Cat> {
    return this.http.post<Cat>(this.catsUrl + '/', cat);
  }

  getCats(): Observable<PaginatedList<Cat>> {
    return this.http.get<PaginatedList<Cat>>(this.catsUrl);
  }
}
