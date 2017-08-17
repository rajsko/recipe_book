import { Recipe } from "app/RecipeComponents/recipe.model";
import { EventEmitter, Injectable } from "@angular/core";
import {Ingredient} from "app/shared/ingredient.model";
import { ShoppingListService } from "app/ShoppingListComponents/shopping-list.service";
@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();
    constructor(private SLService: ShoppingListService){}

    private recipes: Recipe[] = [
        new Recipe('Wiener Schnitzel',
         'Very tasty shnitzel from heart of Austria',
         'https://bigoven-res.cloudinary.com/image/upload/main---wiener-schnitzel-8f03d26e1f0f2601215a7029.jpg',
        [
            new Ingredient('Meat',1),
            new Ingredient('French fires',20)
        ]
        ),
        new Recipe('Big Kahoona Burger',
         'This is a damn good burger!',
         'https://upload.wikimedia.org/wikipedia/en/4/48/Big_Kahuna_Burger_%28small%29.png',
        [
            new Ingredient("Buns",2),
            new Ingredient("meat",1)

        ]
        )
  ];

  

  getRecipes(){
      return this.recipes.slice();
  }

  addIngredientsTS(ingredients: Ingredient[]){
    this.SLService.addIngredients(ingredients);
  }
}