import { Component, OnInit } from '@angular/core';
import { Recipe } from "app/RecipeComponents/recipe.model";
import { RecipeService } from "app/RecipeComponents/recipe.service";

@Component({
    selector: 'recipes-app',
    templateUrl: 'recipes.component.html',
    styleUrls: ['recipes.component.css'],
    providers: [RecipeService]
})

export class RecipesComponent implements OnInit{
    selectedRecipe: Recipe;

    constructor(private recipeService: RecipeService){}

    ngOnInit(){
        this.recipeService.recipeSelected.subscribe(
            (recipe: Recipe) => {
                this.selectedRecipe = recipe;
            }
        );
    }

}