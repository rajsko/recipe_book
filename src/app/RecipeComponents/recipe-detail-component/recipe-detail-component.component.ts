import { AuthService } from '../../auth/auth.service';
import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from "app/RecipeComponents/recipe.model";
import { RecipeService } from "app/RecipeComponents/recipe.service";
import { ActivatedRouteSnapshot, ActivatedRoute, Params, Router } from "@angular/router";

@Component({
  selector: 'app-recipe-detail-component',
  templateUrl: './recipe-detail-component.component.html',
  styleUrls: ['./recipe-detail-component.component.css']
})
export class RecipeDetailComponentComponent implements OnInit {
  recipe: Recipe;
  SelectedRecipeID: number;

  constructor(
    private recipeService: RecipeService,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params)=>{
        this.SelectedRecipeID = params['id'];
        this.recipe = this.recipeService.getRecipeByID(this.SelectedRecipeID);
      }
    );
  }

  onEdit(){
    this.router.navigate(["edit"], {relativeTo: this.route});
  }

  addRecipeIngredients(){
    this.recipeService.addIngredientsTS(this.recipe.ingredients);
  }

  onDelete(){
    this.recipeService.deleteRecipe(this.SelectedRecipeID);
    this.router.navigate(['/recipes']);
  }


}
