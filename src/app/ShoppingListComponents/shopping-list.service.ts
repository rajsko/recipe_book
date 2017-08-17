import { Ingredient } from "app/shared/ingredient.model";
import { EventEmitter } from "@angular/core";
import { Recipe } from "app/RecipeComponents/recipe.model";
export class ShoppingListService {
    ingredientsChanged = new EventEmitter<Ingredient[]>();
    newRecipes = new EventEmitter<Recipe[]>();
    private ingredients: Ingredient[] = [
    new Ingredient('Apples',5),
    new Ingredient('tomatoes', 10)
  ];

  getIngredients(){
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient){
    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]){
    this.ingredients.push(...ingredients);
    this.preventAdding(ingredients);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }

  preventAdding(ingredients: Ingredient[]){
    for(let ing of ingredients){
      let filtered = [];
        filtered = this.ingredients.filter(ingredient =>(ingredient.name === ing.name));
        if(filtered.length !== 1){
          alert("ingredient already added");
          this.ingredients.splice(this.ingredients.length-2, 2);
        }
    }
  }
}