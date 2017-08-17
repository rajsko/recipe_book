import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
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
    DropdownDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
