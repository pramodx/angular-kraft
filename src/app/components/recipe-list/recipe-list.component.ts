import {Component, OnInit} from "@angular/core";
import {Recipe} from "../../models/recipe";
import {RecipeService} from "../../services/recipe.service";
import {Router} from "@angular/router";
@Component({
	selector: 'recipe-list',
	templateUrl: './app/components/recipe-list/recipe-list.component.html',
	styleUrls: ['./app/components/recipe-list/recipe-list.component.css'],
	providers: [RecipeService]
})
export class RecipeListComponent implements OnInit{
	recipes:Recipe[];
	
	constructor(
		private _recipeService:RecipeService,
		private _router: Router) {
	}
	
	ngOnInit() {
		this.getAllRecipes();
	}
	
	getAllRecipes() {
		this._recipeService.getAllRecipes().then((recipes) => this.recipes = recipes);
	}
	
	
	getImagePath(imgPath) {
		return './img/recipes/img-small-' + imgPath + '.jpg';
	}
	
	// onSelectProduct(product:Product) {
	// 	//this.selectedProduct.emit(product);
	// 	let link = ['/products', product.id];
	// 	this._router.navigate(link)
	// }
}
