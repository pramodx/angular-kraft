import {Component, Input, OnInit} from "@angular/core";
import {Product} from "../../models/product";
import {NutritionService} from "../../services/nutrition.service";
import {Nutrition} from "../../models/nutrition";
import {FilterByPipe} from "../../pipes/filter-data.pipe";
@Component({
	selector: 'nutrition-data',
	providers: [NutritionService],
	pipes: [FilterByPipe],
	templateUrl: './app/components/nutrition/nutrition.component.html'
})
export class NutritionComponent  {
	@Input()
	product: Product;
	nutritions: Nutrition[];

	id: number;

	constructor(private _nutritionService: NutritionService){

	}

	ngOnInit(){

		console.log('inited');
		this.id = this.product.id;

		this._nutritionService.getNutrition().then(data => this.nutritions = data)
	}
}