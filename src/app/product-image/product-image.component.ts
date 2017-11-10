import {Component, HostBinding, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {Product} from "../product.model";

@Component({
  selector: 'app-product-image',
  // host: {class: 'ui small image'},
  templateUrl: './product-image.component.html',
  styleUrls: ['./product-image.component.css'],
  encapsulation: ViewEncapsulation.None
})

@HostBinding('class.ui small image')

export class ProductImageComponent implements OnInit {
  @Input() product: Product;

  constructor() { }

  ngOnInit() {
  }

}
