import { ViewChild } from '@angular/core/src/metadata/di';
import { NgForm } from '@angular/forms';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Ingredient } from "app/shared/ingredient.model";
import { ShoppingListService } from "app/ShoppingListComponents/shopping-list.service";
import { Subscription } from "rxjs/Subscription";

@Component({
  selector: 'app-shopping-edit-component',
  templateUrl: './shopping-edit-component.component.html',
  styleUrls: ['./shopping-edit-component.component.css']
})
export class ShoppingEditComponentComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  @ViewChild('f') shoppingForm: NgForm;
  editMode = false;
  editedIngredient: Ingredient;  
  editItemIndex: number;
  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.subscription = this.shoppingListService.startedEditing
      .subscribe(
        (index: number) => {
          this.editItemIndex = index;
          this.editMode = true;
          this.editedIngredient = this.shoppingListService.getIngredient(index);
          this.shoppingForm.setValue({
            name: this.editedIngredient.name,
            amount: this.editedIngredient.amount
          });
        }
    );
  }

  onAddIngredient(form: NgForm){
    const value = form.value;
    const newIngredient = new Ingredient(value.name, value.amount);
    if(this.editMode){
      let name = this.shoppingForm.value.name;
      let amount = this. shoppingForm.value.amount;
      this.shoppingListService.upIngredient(this.editItemIndex, newIngredient);
    }
    else{
      this.shoppingListService.addIngredient(newIngredient);
    }
    this.shoppingForm.reset();
    this.editMode = false;
  }

  onClear(){
    this.shoppingForm.reset();
    this.editMode = false;
  }
  onDelete(){
    console.log(this.editItemIndex);
    this.shoppingListService.deleteIngredient(this.editItemIndex);
    this.onClear();
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }


}
