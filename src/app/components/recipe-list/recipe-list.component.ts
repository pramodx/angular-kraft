import {Component, OnInit} from "@angular/core";
import {RecipeService} from "../../services/recipe.service";
import {ROUTER_DIRECTIVES} from "@angular/router";
import {AngularFire, FirebaseListObservable} from "angularfire2";
import {Subject} from "rxjs/Subject";
import {Observable} from "rxjs/Rx";
import {Recipe} from "../../models/recipe";
@Component({
	selector: 'recipe-list',
	templateUrl: './app/components/recipe-list/recipe-list.component.html',
	styleUrls: ['./app/components/recipe-list/recipe-list.component.css'],
	providers: [RecipeService],
	directives: [ROUTER_DIRECTIVES]
})
export class RecipeListComponent {
	recipes:Recipe[];
	items: Observable<any[]>;
	data:any;
	sizeSubject: Subject<any>;
	
	constructor(af: AngularFire) {
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
}
