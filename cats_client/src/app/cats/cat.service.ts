import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { BehaviorSubject, Observable } from "rxjs";
import { Cat, CatWithoutId } from "./cat.model";
import { EMPTY_PAGINATED_RESPONSE, PaginatedList } from '../api/utils';

@Injectable({
  providedIn: 'root',
})
export class CatService {
  private catsListSubject = new BehaviorSubject<PaginatedList<Cat>>(EMPTY_PAGINATED_RESPONSE);
  catsList$ = this.catsListSubject.asObservable();
  private catsUrl = "http://localhost:8000/v1/cats";
  currentPage: number = 1;
  breedFilter: string | undefined

  constructor(private http: HttpClient) { }

  createCat(cat: CatWithoutId): Observable<CatWithoutId> {
    return this.http.post<Cat>(this.catsUrl + '/', cat);
  }

  updateCat(cat: Cat): Observable<CatWithoutId> {
    return this.http.patch<Cat>(this.catsUrl + '/' + cat.id + '/', cat);
  }

  getCats(): void {
    let params = new HttpParams()
      .set('page', this.currentPage.toString())

    if (this.breedFilter) {
      params = params.set('breed', this.breedFilter);
    }

    this.http.get<PaginatedList<Cat>>(this.catsUrl, { params }).subscribe({
      next: cats => {
        this.catsListSubject.next(cats)
      }
    })
  }

  updatePageParam(currentPage: number) {
    this.currentPage = currentPage
  }

  updateBreedFilter(breed?: string) {
    this.currentPage = 1
    this.breedFilter = !!breed ? breed : undefined
  }
}
