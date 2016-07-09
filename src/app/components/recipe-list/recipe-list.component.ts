import {Component} from "@angular/core";
import {ROUTER_DIRECTIVES} from "@angular/router";
import {AngularFire} from "angularfire2";
import {Observable} from "rxjs/Rx";
import {Recipe} from "../../models/recipe";
@Component({
	selector: 'recipe-list',
	templateUrl: './app/components/recipe-list/recipe-list.component.html',
	styleUrls: ['./app/components/recipe-list/recipe-list.component.css'],
	directives: [ROUTER_DIRECTIVES]
})
export class RecipeListComponent {
	recipes:Recipe[];
	items: Observable<any[]>;
	
	constructor(private af: AngularFire) {
		this.items = af.database.list('/data', {preserveSnapshot: true});
		this.items
			.subscribe(snapshots => {
				this.recipes = [];
				snapshots.forEach(snapshot => {
					var obj = snapshot.val();
					obj.uid = snapshot.key;
					this.recipes.push(obj);
				})
			})
	}
	
	
	deleteRecipe(key){
		if (confirm("Are you sure you want to delete this record?")){
			const items = this.af.database.list('/data');
			items.remove(key);
		} else {
			return false;
		}
	}
}
