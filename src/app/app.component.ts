import {Component} from '@angular/core';
import {MainNavComponent} from "./components/mainnav/mainnav.component";
import {ROUTER_DIRECTIVES, Router, ActivatedRoute} from "@angular/router";
import {ProductsDashboardComponent} from "./components/products-dashboard/products-dashboard.component";
import {AdminComponent} from "./components/admin/admin.component";
import {RecipeDashboardComponent} from "./components/recipe-dashboard/recipe-dashboard.component";

@Component({
	moduleId: module.id,
	selector: 'app-root',
	directives: [ROUTER_DIRECTIVES, MainNavComponent],
	templateUrl: 'app.component.html',
	styleUrls: ['app.component.css'],
	precompile: [
		ProductsDashboardComponent,
		AdminComponent,
		RecipeDashboardComponent
	]
})
export class AppComponent {

}
