import { AuthGuard } from './auth/auth-guard.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { RecipeListComponentComponent } from './RecipeComponents/recipe-list-component/recipe-list-component.component';
import { RecipeItemComponentComponent } from './RecipeComponents/recipe-list-component/recipe-item-component/recipe-item-component.component';
import { RecipeDetailComponentComponent } from './RecipeComponents/recipe-detail-component/recipe-detail-component.component';
import { ShoppingListComponentComponent } from './ShoppingListComponents/shopping-list-component/shopping-list-component.component';
import { ShoppingEditComponentComponent } from './ShoppingListComponents/shopping-list-component/shopping-edit-component/shopping-edit-component.component';
import { HeaderComponent } from './header-component/header.component';
import { RecipesComponent } from './RecipeComponents/recipes.component';
import { DropdownDirective } from "app/shared/dropdown.directive";
import { Routes } from "@angular/router";
import { AppRoutingModule } from "app/app-routing.module";
import { RecipesDefaultComponent } from './recipes/recipes-default/recipes-default.component';
import { RecipeEditComponent } from './RecipeComponents/recipe-edit/recipe-edit.component';
import { RecipeService } from "app/RecipeComponents/recipe.service";
import { ShoppingListService } from "app/ShoppingListComponents/shopping-list.service";
import { SingupComponent } from './auth/singup/singup.component';
import { SinginComponent } from './auth/singin/singin.component';
import {  AuthService } from "app/auth/auth.service";

const routes: Routes = [

]

@NgModule({
  declarations: [
    AppComponent,
    RecipeListComponentComponent,
    RecipeItemComponentComponent,
    RecipeDetailComponentComponent,
    ShoppingListComponentComponent,
    ShoppingEditComponentComponent,
    HeaderComponent,
    RecipesComponent,
    DropdownDirective,
    RecipesDefaultComponent,
    RecipeEditComponent,
    SingupComponent,
    SinginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [ShoppingListService, RecipeService, AuthService, AuthGuard],
  bootstrap: [ AppComponent]
})
export class AppModule { }
