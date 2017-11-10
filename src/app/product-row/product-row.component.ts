import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {Product} from "../product.model";

@Component({
  selector: 'app-product-row',
  templateUrl: './product-row.component.html',
  styleUrls: ['./product-row.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProductRowComponent implements OnInit {
  @Input() product: Product;
  constructor() { }

  ngOnInit() {
  }

}
