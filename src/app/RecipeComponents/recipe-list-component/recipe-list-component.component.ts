import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from "app/RecipeComponents/recipe.service";


@Component({
  selector: 'app-recipe-list-component',
  templateUrl: './recipe-list-component.component.html',
  styleUrls: ['./recipe-list-component.component.css']
})
export class RecipeListComponentComponent implements OnInit {
  recipes: Recipe[];
  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }

}
