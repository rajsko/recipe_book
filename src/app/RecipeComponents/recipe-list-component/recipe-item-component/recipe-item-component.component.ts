import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from "app/RecipeComponents/recipe.model";
import { RecipeService } from "app/RecipeComponents/recipe.service";

@Component({
  selector: 'app-recipe-item-component',
  templateUrl: './recipe-item-component.component.html',
  styleUrls: ['./recipe-item-component.component.css']
})
export class RecipeItemComponentComponent implements OnInit {
  @Input('rec') recipe: Recipe;
  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  }

  onSelected(){
    this.recipeService.recipeSelected.emit(this.recipe);
  }

}
