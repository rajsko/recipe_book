import { Recipe } from './RecipeComponents/recipe.model';
import { RecipeService } from './RecipeComponents/recipe.service';
import { Component, OnInit } from '@angular/core';
import { ShoppingListService } from "app/ShoppingListComponents/shopping-list.service";
import { ActivatedRoute, Router } from "@angular/router";
import * as firebase from 'firebase';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  //title = 'app works!';
  loadedFeature = 'recipe';

  constructor(private route: ActivatedRoute, private router: Router, private rs: RecipeService){}
  ngOnInit(){
    firebase.initializeApp({
      apiKey: "AIzaSyDuLXBcLnLMDw_QjlSh7gC-V5M_v9gTqv0",
      authDomain: "receptar.firebaseapp.com"
    });
    this.rs.fetchRecipes();
  }

}
