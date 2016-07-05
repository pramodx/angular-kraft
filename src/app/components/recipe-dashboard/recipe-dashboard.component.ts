import {Component} from "@angular/core";
import {RecipeListComponent} from "../recipe-list/recipe-list.component";
@Component({
	selector: 'recipes',
	templateUrl: './app/components/recipe-dashboard/recipe-dashboard.component.html',
	directives: [RecipeListComponent]
})
export class RecipeDashboardComponent {
	
}