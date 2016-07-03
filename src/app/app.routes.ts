import {RouterConfig, provideRouter} from "@angular/router";
import {ProductsDashboardComponent} from "./components/products-dashboard/products-dashboard.component";
import {AdminComponent} from "./components/admin/admin.component";
import {RecipeComponent} from "./components/recipes/recipes.component";
import {Product} from "./models/product";
export const routes: RouterConfig = [
	{
		path: '',
		redirectTo: '/products',
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
		component: RecipeComponent
	}
];

export const APP_ROUTER_PROVIDERS = [
	provideRouter(routes)
]