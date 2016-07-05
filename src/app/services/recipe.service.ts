import {Injectable} from "@angular/core";
import {RECIPES} from "../data/recipes";

@Injectable()
export class RecipeService {
	getAllRecipes() {
		return Promise.resolve(RECIPES);
	}
	
	getRecipe(id:number){
		return this.getAllRecipes()
			.then(recipes => recipes.filter(recipe => recipe.id === id)[0]);
	}
	
	getRecipesForProduct(id:number){
		return this.getAllRecipes()
			.then(recipes => recipes.filter(recipe => recipe.product_id === id)[0])
	}
}