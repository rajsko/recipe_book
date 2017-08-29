import { FormArray } from '@angular/forms/src/model';
import { RecipeService } from '../recipe.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Recipe } from "app/RecipeComponents/recipe.model";

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id: number;
  editMode: boolean = false;
  recipeForm: FormGroup;
  constructor(
    private route: ActivatedRoute,
     private recipeService: RecipeService,
     private router: Router
  ) { }

  ngOnInit() {
  this.route.params.subscribe(
    (params: Params) => {
      this.id = +params['id'];
      this.editMode = params['id'] != null;
      this.initForm();
    }
  );
  }

  onAddIngredient(){
    (<FormArray>this.recipeForm.get('ingredients')).push(
      new FormGroup({
        'name': new FormControl(null, Validators.required),
        'amount': new FormControl(null,[Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)
      ])
      })
    )
  }

  onSubmit(){
    const newReipce = new Recipe(
      this.recipeForm.value['name'],
      this.recipeForm.value['desc'],
      this.recipeForm.value['imgPath'],
      this.recipeForm.value['ingredients']
      );
    if (this.editMode){
      this.recipeService.upRecipe(this.id, newReipce );
    }else{
      this.recipeService.AddRecipe(newReipce);
    }
    this.onCancel();
  }

  onCancel(){
    this.router.navigate(['..'],{ relativeTo:this.route });
  }

  onDeleteIngredient(index: number){
   (<FormArray> this.recipeForm.get('ingredients')).removeAt(index);
  }

  private initForm(){
    let recipeName = '';
    let recipeImgPath = '';
    let recipeDescription = '';
    let recipeIngredients = new FormArray([]);
    if (this.editMode){
      const recipe = this.recipeService.getRecipeByID(this.id);      
      recipeName = recipe.name;
      recipeImgPath = recipe.imagePath;
      recipeDescription = recipe.description;
      if(recipe['ingredients']){
        for(let ingredient of recipe.ingredients){
          recipeIngredients.push(
            new FormGroup({
              'name': new FormControl(ingredient.name, Validators.required),
              'amount': new FormControl(ingredient.amount, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)
              ])
            })
          )
        }
      }
    }
    this.recipeForm = new FormGroup({
      'name': new FormControl(recipeName, Validators.required),
      'imgPath': new FormControl(recipeImgPath, Validators.required),
      'desc': new FormControl(recipeDescription, Validators.required),
      'ingredients': recipeIngredients
    });
  }

}
