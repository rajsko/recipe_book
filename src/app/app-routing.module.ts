import { AuthGuard } from './auth/auth-guard.service';
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { RecipesComponent } from "app/RecipeComponents/recipes.component";
import { ShoppingListComponentComponent } from "app/ShoppingListComponents/shopping-list-component/shopping-list-component.component";
import { RecipesDefaultComponent } from "app/recipes/recipes-default/recipes-default.component";
import { RecipeDetailComponentComponent } from "app/RecipeComponents/recipe-detail-component/recipe-detail-component.component";
import { RecipeEditComponent } from "app/RecipeComponents/recipe-edit/recipe-edit.component";
import { SingupComponent } from "app/auth/singup/singup.component";
import { SinginComponent } from "app/auth/singin/singin.component";

const appRoutes: Routes = [
    {path: '', redirectTo: '/recipes', pathMatch: 'full'},
    {path: 'recipes', component: RecipesComponent, children: [
        {path: '', component: RecipesDefaultComponent, pathMatch: 'full'},
        {path: 'new' ,component: RecipeEditComponent, canActivate: [AuthGuard]},
        {path: ':id' ,component: RecipeDetailComponentComponent},
        {path: ':id/edit' ,component: RecipeEditComponent, canActivate: [AuthGuard]}
    ]},
    {path: 'shopping-list', component: ShoppingListComponentComponent},
    {path: 'signup',component: SingupComponent},
    {path: 'signin',component: SinginComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule{

}