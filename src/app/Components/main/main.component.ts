import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductService } from 'src/app/Services/product.service';
import { BehaviorSubject } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(public productService: ProductService) { }
  private availableProducts$: BehaviorSubject<any> = new BehaviorSubject(null)
  /**
   * Function that returns all item of a category
   */
  public getAllItems(endpoint: string) {
    return this.productService.getProducts(endpoint)
  }

  get getAvailableProducts$() {
    return this.availableProducts$.asObservable()
  }
  public selectedCategory: string = null
  public products = [
    {
      name: "Alcohalic",
      detailEndpoint: "https://www.thecocktaildb.com/api/json/v1/1/filter.php",
      param: "a",
      key: "strAlcoholic",
      getitems: (() => {
        let endpoint = "https://www.thecocktaildb.com/api/json/v1/1/list.php?a=list"
        return this.getAllItems(endpoint)
      })()
    },
    {
      name: "Glass",
      detailEndpoint: "https://www.thecocktaildb.com/api/json/v1/1/filter.php",
      param: "g",
      key: "strGlass",
      getitems: (() => {
        let endpoint = "https://www.thecocktaildb.com/api/json/v1/1/list.php?g=list"
        return this.getAllItems(endpoint)
      })()
    },
    {
      name: "Category",
      detailEndpoint: "https://www.thecocktaildb.com/api/json/v1/1/filter.php",
      param: "c",
      key: "strCategory",
      getitems: (() => {
        let endpoint = "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list"
        return this.getAllItems(endpoint)
      })()
    },
    {
      name: "Ingredients",
      detailEndpoint: "https://www.thecocktaildb.com/api/json/v1/1/filter.php",
      param: "i",
      key: "strIngredient1",
      getitems: (() => {
        let endpoint = "https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list"
        return this.getAllItems(endpoint)
      })()
    }
  ]
  ngOnInit() {
  }

  /**
   * Filter on chip click
   */
  public filterApplied(data) {
    this.selectedCategory = data.value
    this.productService.applyFilter(data)
      .pipe(
        take(1)
      )
      .subscribe(r => {
        this.availableProducts$.next(r)
      })
  }
}
