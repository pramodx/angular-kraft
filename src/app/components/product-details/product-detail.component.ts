import {Component, OnInit, OnDestroy} from "@angular/core";
import {Product} from "../../models/product";
import {NutritionComponent} from "../nutrition/nutrition.component";
import {ProductsService} from "../../services/products.service";
import {ActivatedRoute} from "@angular/router";
@Component({
  selector: 'product-detail',
  templateUrl:  './app/components/product-details/product-detail.component.html',
  styleUrls:    ['./app/components/product-details/product-detail.component.css'],
  directives: [NutritionComponent],
  providers: [ProductsService]
})
export class ProductDetailComponent implements OnInit, OnDestroy {
  product: Product;
  sub: any;

  constructor(
      private _productService: ProductsService,
      private _route: ActivatedRoute
  ){}

  ngOnInit():any {
    this.sub = this._route.params.subscribe(params => {
      let id = +params['id'];
      this._productService.getProduct(id)
          .then(product => this.product = product);
    })
  }

  ngOnDestroy():any {
    this.sub.unsubscribe();
  }

  getImagePath(imgPath) {
    return './img/range/img-big-' + imgPath + '.png';
  }


}
