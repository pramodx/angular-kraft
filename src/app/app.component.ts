import {Component} from '@angular/core';
import {ProductsComponent} from "./components/products/products.component";
import {ProductDetailComponent} from "./components/product-details/product-detail.component";
import {Product} from "./models/product";
import {NutritionComponent} from "./components/nutrition/nutrition.component";
import {MainNavComponent} from "./components/mainnav/mainnav.component";
import {ROUTER_DIRECTIVES} from "@angular/router";

@Component({
	moduleId: module.id,
	selector: 'app-root',
	directives: [ROUTER_DIRECTIVES, MainNavComponent],
	templateUrl: 'app.component.html',
	styleUrls: ['app.component.css']
})
export class AppComponent {


}
