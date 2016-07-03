import {Component, Input} from "@angular/core";
import {Product} from "../../models/product";
import {NutritionComponent} from "../nutrition/nutrition.component";
@Component({
  selector: 'product-detail',
  templateUrl:  './app/components/product-details/product-detail.component.html',
  styleUrls:    ['./app/components/product-details/product-detail.component.css'],
	directives: [NutritionComponent]
})
export class ProductDetailComponent {
  @Input()
  product: Product

  getImagePath(imgPath) {
    return './img/range/img-big-' + imgPath + '.png';
  }
}
