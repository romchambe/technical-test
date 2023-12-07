import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import { Cat, CatWithoutId } from "./cat.model";
import { PaginatedList } from '../api/utils';

@Injectable({
  providedIn: 'root',
})
export class CatService {

  private catsUrl = "http://localhost:8000/v1/cats";

  constructor(private http: HttpClient) { }

  createCat(cat: CatWithoutId): Observable<CatWithoutId> {
    return this.http.post<Cat>(this.catsUrl + '/', cat);
  }

  updateCat(cat: Cat): Observable<CatWithoutId> {
    return this.http.patch<Cat>(this.catsUrl + '/' + cat.id + '/', cat);
  }

  getCats(page: number, breed?: string): Observable<PaginatedList<Cat>> {
    let params = new HttpParams()
      .set('page', page.toString())

    if (breed) {
      params = params.set('breed', breed);
    }

    return this.http.get<PaginatedList<Cat>>(this.catsUrl, { params });
  }
}
