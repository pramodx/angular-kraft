import {Component} from '@angular/core';
import {ProductsComponent} from "./components/products/products.component";
import {ProductDetailComponent} from "./components/product-details/product-detail.component";
import {Product} from "./models/product";

@Component({
	moduleId: module.id,
	selector: 'app-root',
	directives: [ProductsComponent, ProductDetailComponent],
	templateUrl: 'app.component.html',
	styleUrls: ['app.component.css']
})
export class AppComponent {
	selectedProduct: Product;

	onSelectProduct(product: Product) {
		this.selectedProduct = product;
	}

}
