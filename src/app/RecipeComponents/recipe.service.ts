import { AuthService } from '../auth/auth.service';
import { Observable } from 'rxjs/Rx';
import { Http, Response } from '@angular/http';
import { Subject } from 'rxjs/Subject';
import { Recipe } from "app/RecipeComponents/recipe.model";
import { Injectable } from "@angular/core";
import {Ingredient} from "app/shared/ingredient.model";
import { ShoppingListService } from "app/ShoppingListComponents/shopping-list.service";
import 'rxjs/add/operator/map';


@Injectable()
export class RecipeService {
    recipesChanged = new Subject<Recipe[]>();
    constructor(private SLService: ShoppingListService,
      private http: Http,
      private authService: AuthService){}

    private recipes: Recipe[] = [

  ];

  uploadRecipes(){
    const token = this.authService.getToken();
    return this.http.put('https://receptar.firebaseio.com/recipes.json?auth=' + token, this.getRecipes());
  }

  fetchRecipes(){
    
    this.http.get('https://receptar.firebaseio.com/recipes.json')
      .map(
        (response: Response) =>{
          const recipes: Recipe[] = response.json();
          for(let recipe of recipes){
            if (!recipe['ingredients']){
              recipe['ingredients'] = [];
            }
          }
          return recipes;
        }
      )
      .subscribe(
        (recipes: Recipe[]) => {
            for(let recipe of recipes){
                this.AddRecipe(recipe);
            }
        }
    );
  }


  AddRecipe(recipe: Recipe){
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  upRecipe(index: number, recipe: Recipe){
    this.recipes[index] = recipe;
    this.recipesChanged.next(this.recipes.slice());    
  }

  deleteRecipe(index: number){
    this.recipes.splice(index,1);
    this.recipesChanged.next(this.recipes.slice());
  }
  

  getRecipes(){
      return this.recipes.slice();
  }


    getRecipeByID(id: number){
        return this.recipes[id];
    }

  addIngredientsTS(ingredients: Ingredient[]){
    this.SLService.addIngredients(ingredients);
  }
}