import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  constructor() { }
  @Input('title') title : string;
  @Input('type') type : string;
  @Input('thumbnail') thumbnail : string;
  ngOnInit() {
  }

}
