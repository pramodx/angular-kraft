import {Component, OnInit} from "@angular/core";
import {DataService} from "../../services/data.service";
import 'rxjs/Rx';
import {AngularFire} from "angularfire2/angularfire2";
import {Product} from "../../models/product";
import {ProductsService} from "../../services/products.service";
import {Router} from "@angular/router";

@Component({
	selector: 'recipe-editor',
	templateUrl: './app/components/recipe-editor/recipe-editor.component.html',
	styleUrls: ['./app/components/recipe-editor/recipe-editor.component.css'],
	providers: [DataService, ProductsService]
})
export class RecipeEditorComponent implements OnInit {
	response: string;
	isLoggedIn: boolean;
	products: Product[];
	
	constructor(
		public af: AngularFire,
		private _productsService: ProductsService,
	    private _router: Router
	){}
	
	ngOnInit(){
		//get list of all products
		this._productsService.getAllProducts().then((products) => this.products = products);
	}
	
	onSubmit(
		name: string,
		product_id: string,
		need: string,
		making: string,
		preptime: string,
		serves: string
	){
		if (!localStorage.getItem('isLoggedIn')) {
			this.login();
		}
			
		const itemObservable = this.af.database.list('/data');
		itemObservable.push({
			name: name,
			product_id: +product_id,
			need: need,
			making: making,
			preptime: +preptime,
			serves: +serves,
			recipe_image: this.getRecipeImage(name)
		}).then((response) => {
			console.log('successfully added data');
			this._router.navigate(['/recipes']);
		});
		
	}
	
	getRecipeImage(name){
		return name.split(" ").join("-").toLowerCase();
	}
	
	login(){
		this.af.auth.login();
		localStorage.setItem('isLoggedIn', "true")
	}
}