import { Component, OnInit, Input, ViewChild, AfterViewInit, Output, EventEmitter } from '@angular/core';
import { MatChipList, MatChip } from '@angular/material/chips';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit, AfterViewInit {

  constructor() { }
  @Input('products') products;
  @Output() filterApplied = new EventEmitter(null);
  @ViewChild('chipList') chipList: MatChipList
  ngOnInit() {
  }
  ngAfterViewInit() {
  }

  applyFilter(chip: MatChip, item) {
    chip.select()
    console.log("val", chip.value)
    console.log("item", item)
    let data = {
      endpoint: item.detailEndpoint,
      value: chip.value,
      param: item.param
    }
    this.filterApplied.emit(data)
  }

}
