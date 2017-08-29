import { AuthService } from '../auth/auth.service';
import { Recipe } from '../RecipeComponents/recipe.model';
import { RecipeService } from '../RecipeComponents/recipe.service';
import { constructDependencies } from '@angular/core/src/di/reflective_provider';
import { Component, OnInit } from '@angular/core';
import { Response } from "@angular/http";

@Component({
    selector: 'app-hdr',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})

export class HeaderComponent{
    constructor(private rs: RecipeService, private authService: AuthService){}

    onSaveData(){
        this.rs.uploadRecipes().subscribe(
            (response: Response) => console.log(response)
        );
    }

    onFetch(){
        this.rs.fetchRecipes();
    }

    onLogout(){
        this.authService.logout();
    }
    
}