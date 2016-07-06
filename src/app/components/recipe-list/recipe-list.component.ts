import {Component, OnInit} from "@angular/core";
import {Recipe} from "../../models/recipe";
import {RecipeService} from "../../services/recipe.service";
import {ROUTER_DIRECTIVES, RouterConfig} from "@angular/router";
@Component({
	selector: 'recipe-list',
	templateUrl: './app/components/recipe-list/recipe-list.component.html',
	styleUrls: ['./app/components/recipe-list/recipe-list.component.css'],
	providers: [RecipeService],
	directives: [ROUTER_DIRECTIVES]
})
export class RecipeListComponent {
	recipes:Recipe[];
}
