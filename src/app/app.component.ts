import {Component} from '@angular/core';
import {ProductsComponent} from "./components/products/products.component";
import {ProductDetailComponent} from "./components/product-details/product-detail.component";
import {Product} from "./models/product";
import {NutritionComponent} from "./components/nutrition/nutrition.component";

@Component({
	moduleId: module.id,
	selector: 'app-root',
	directives: [ProductsComponent, ProductDetailComponent, NutritionComponent],
	templateUrl: 'app.component.html',
	styleUrls: ['app.component.css']
})
export class AppComponent {
	selectedProduct: Product;

	onSelectProduct(product: Product) {
		this.selectedProduct = product;
	}

}
