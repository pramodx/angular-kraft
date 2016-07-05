import {Component} from '@angular/core';
import {MainNavComponent} from "./components/mainnav/mainnav.component";
import {ROUTER_DIRECTIVES, Router, ActivatedRoute} from "@angular/router";
import {ProductsDashboardComponent} from "./components/products-dashboard/products-dashboard.component";

@Component({
	moduleId: module.id,
	selector: 'app-root',
	directives: [ROUTER_DIRECTIVES, MainNavComponent],
	templateUrl: 'app.component.html',
	styleUrls: ['app.component.css'],
	precompile: [ProductsDashboardComponent]
})
export class AppComponent {

}
