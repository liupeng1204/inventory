import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {Product} from "../product.model";

@Component({
  selector: 'app-product-department',
  templateUrl: './product-department.component.html',
  styleUrls: ['./product-department.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProductDepartmentComponent implements OnInit {
  @Input() product: Product;

  constructor() { }

  ngOnInit() {
  }

}
