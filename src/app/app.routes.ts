import {RouterConfig, provideRouter} from "@angular/router";
import {ProductsDashboardComponent} from "./components/products-dashboard/products-dashboard.component";
import {AdminComponent} from "./components/admin/admin.component";
import {RecipeListComponent} from "./components/recipe-list/recipe-list.component";
import {RecipeEditorComponent} from "./components/recipe-editor/recipe-editor.component";
import {RecipeDetailComponent} from "./components/recipe-detail/recipe-detail.component";
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
		component: RecipeListComponent
	},
	{
		path: 'recipes/recipe/:id',
		component: RecipeDetailComponent,
		pathMatch: 'full'
	},
	{
		path: 'recipes/editor',
		component: RecipeEditorComponent,
		pathMatch: 'full'
	},
	{
		path: 'recipes/editor/add',
		component: RecipeEditorComponent,
		pathMatch: 'full'
	},
	{
		path: 'recipes/editor/edit/:id',
		component: RecipeEditorComponent,
		pathMatch: 'full'
	}
];

export const APP_ROUTER_PROVIDERS = [
	provideRouter(routes)
]