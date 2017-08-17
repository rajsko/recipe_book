import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from "app/RecipeComponents/recipe.model";
import { RecipeService } from "app/RecipeComponents/recipe.service";

@Component({
  selector: 'app-recipe-detail-component',
  templateUrl: './recipe-detail-component.component.html',
  styleUrls: ['./recipe-detail-component.component.css']
})
export class RecipeDetailComponentComponent implements OnInit {
  @Input() recipe: Recipe;
  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  }

  addRecipeIngredients(){
    this.recipeService.addIngredientsTS(this.recipe.ingredients);
  }


}
