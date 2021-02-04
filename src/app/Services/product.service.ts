import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError, filter } from 'rxjs/operators';
import { of, BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }
  private sidebarStatus$: BehaviorSubject<any> = new BehaviorSubject(true)
  public sidebarOpened$ = this.sidebarStatus$.asObservable()
  public getProducts(endpoint: string) {
    return this.http.get(endpoint).pipe(
      map(r => r['drinks']),
      catchError(e => {
        alert(e);
        return of(false)
      })
    )
  }

  public toggleSidebar() {
    let value = !this.sidebarStatus$.value
    this.sidebarStatus$.next(value)
  }

  /**
   * Search product by ingredient or cocktail name
   */
  public searchProduct(endpoint, param, val, type) {
    return this.http.get(endpoint, {
      params: {
        [param]: val
      }
    }).pipe(
      filter(Boolean),
      map(r => r[type]),
      catchError(e => {
        alert(e);
        return of(false)
      })
    )
  }

  public applyFilter({ endpoint, param, value }) {
    return this.http.get(endpoint, {
      params: {
        [param]: value.split(" ").join("_")
      }
    }).pipe(
      map(r => r['drinks']),
      catchError(e => {
        alert(e);
        return of(false)
      })
    )
  }
}
