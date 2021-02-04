import { Component, OnInit, AfterViewInit, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProductService } from 'src/app/Services/product.service';
import { debounceTime, tap, take, map } from 'rxjs/operators';
import { Observable, of, BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit, AfterViewInit {

  constructor(private fb: FormBuilder = new FormBuilder(), public productService: ProductService) { }
  public searchedProducts$: BehaviorSubject<any> = new BehaviorSubject([])
  searchFormGroup: FormGroup = this.fb.group({
    type: "",
    key: ""
  });

  get disableSearchBox() {
    let val = this.searchFormGroup.get('type').value
    if (val) val.trim()
    else return true
    if (val == "") return true
    else return false
  }

  get placeholder() {
    let val = this.searchFormGroup.get('type').value
    return this.disableSearchBox ? "Choose a type first" : (val == 'drinks' ? 'Search drinks' : 'Search ingredients')
  }

  ngAfterViewInit() {
    this.searchFormGroup.get("key").valueChanges
      .pipe(
        debounceTime(200),
        map(r => r ? r.trim() : r)
      ).subscribe(val => {
        if (!val || val == "") {
          this.searchedProducts$.next([]);
          return
        };
        let type = this.searchFormGroup.get("type").value
        let endpoint = "https://www.thecocktaildb.com/api/json/v1/1/search.php", param
        if (type == "drinks") {
          param = "s"
        } else if (type == "ingredients") {
          param = "i"
        }

        this.productService.searchProduct(endpoint, param, val, type)
          .pipe(take(1))
          .subscribe(r => {
            this.searchedProducts$.next(r)
          })
      })
  }

  get searchedProductsAsObs$() {
    return this.searchedProducts$.asObservable()
  }
  ngOnInit() {
  }
}
