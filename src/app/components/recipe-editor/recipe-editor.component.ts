import {Component} from "@angular/core";
import {DataService} from "../../services/data.service";
import 'rxjs/Rx';

@Component({
	selector: 'recipe-editor',
	templateUrl: './app/components/recipe-editor/recipe-editor.component.html',
	styleUrls: ['./app/components/recipe-editor/recipe-editor.component.css'],
	providers: [DataService]
})
export class RecipeEditorComponent {
	response: string;
		
	constructor(private _dataService: DataService){}
	
	onSubmit(
		name: string,
		product_id: string,
		need: string,
		making: string,
		preptime: string,
		serves: string
	){
		const data = {
			name: name,
			product_id: product_id,
			need: need,
			making: making,
			preptime: preptime,
			serves: serves
		};
		console.log(data, data);
		this._dataService.postData(data)
			.subscribe(
				data => this.response = JSON.stringify(data),
				error => console.log(error)
			)
		
	}
}