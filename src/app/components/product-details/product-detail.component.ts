import {Component, Input} from "@angular/core";
import {Product} from "../../models/product";
@Component({
  selector: 'product-detail',
  templateUrl:  './app/components/product-details/product-detail.component.html',
  styleUrls:    ['./app/components/product-details/product-detail.component.css']
})
export class ProductDetailComponent {
  @Input()
  product: Product
}
