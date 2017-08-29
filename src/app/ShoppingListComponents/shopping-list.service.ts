import { Ingredient } from "app/shared/ingredient.model";
import { EventEmitter } from "@angular/core";
import { Recipe } from "app/RecipeComponents/recipe.model";
import { Subject } from "rxjs/Subject";

export class ShoppingListService {
    ingredientsChanged = new Subject<Ingredient[]>();
    // newRecipes = new EventEmitter<Recipe[]>();
    startedEditing = new Subject<number>();
    private ingredients: Ingredient[] = [
    new Ingredient('Apples',5),
    new Ingredient('tomatoes', 10)
  ];

  getIngredients(){
    return this.ingredients.slice();
  }
  getIngredient(index: number){
    return this.ingredients[index];
  }

  upIngredient(index: number, newIngredient: Ingredient){
    this.ingredients[index] = newIngredient;
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  deleteIngredient(index: number){
    this.ingredients.splice(index,1);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  addIngredient(ingredient: Ingredient){
    this.ingredients.push(ingredient);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]){
    this.ingredients.push(...ingredients);
    this.preventAdding(ingredients);
    this.ingredientsChanged.next(this.ingredients.slice());
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