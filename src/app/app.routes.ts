import {RouterConfig, provideRouter} from "@angular/router";
import {ProductsDashboardComponent} from "./components/products-dashboard/products-dashboard.component";
import {AdminComponent} from "./components/admin/admin.component";
import {RecipeDashboardComponent} from "./components/recipe-dashboard/recipe-dashboard.component";
export const routes: RouterConfig = [
	{
		path: '',
		redirectTo: '/recipes',
		pathMatch: 'full'
	},
	{
		path: 'products',
		component: ProductsDashboardComponent
	},
	{
		path: 'products/:id',
		component: ProductsDashboardComponent
	},
	{
		path: 'admin',
		component: AdminComponent
	},
	{
		path: 'recipes',
		component: RecipeDashboardComponent
	}
];

export const APP_ROUTER_PROVIDERS = [
	provideRouter(routes)
]