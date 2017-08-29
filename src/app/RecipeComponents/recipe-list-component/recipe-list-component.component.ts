import { AuthService } from '../../auth/auth.service';
import { Subscription } from 'rxjs/Rx';
import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from "app/RecipeComponents/recipe.service";


@Component({
  selector: 'app-recipe-list-component',
  templateUrl: './recipe-list-component.component.html',
  styleUrls: ['./recipe-list-component.component.css']
})
export class RecipeListComponentComponent implements OnInit, OnDestroy {
  recipes: Recipe[];
  sub: Subscription;
  constructor(private recipeService: RecipeService, private authService: AuthService) { }

  ngOnInit() {
    this.sub = this.recipeService.recipesChanged.subscribe(
      (recipes: Recipe[]) => {
        this.recipes = recipes;
      }
    );
    this.recipes = this.recipeService.getRecipes();
  }

  ngOnDestroy(){
    this.sub.unsubscribe();
  }

}
