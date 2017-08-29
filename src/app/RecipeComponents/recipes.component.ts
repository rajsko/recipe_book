import { Component, OnInit } from '@angular/core';
import { Recipe } from "app/RecipeComponents/recipe.model";
import { RecipeService } from "app/RecipeComponents/recipe.service";

@Component({
    selector: 'recipes-app',
    templateUrl: 'recipes.component.html',
    styleUrls: ['recipes.component.css']
})

export class RecipesComponent implements OnInit{

    constructor(){}

    ngOnInit(){
    }

}