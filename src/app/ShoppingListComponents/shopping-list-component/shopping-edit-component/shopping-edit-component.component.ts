import { Component, OnInit, ViewChild, Output, EventEmitter, ElementRef } from '@angular/core';
import { Ingredient } from "app/shared/ingredient.model";
import { ShoppingListService } from "app/ShoppingListComponents/shopping-list.service";

@Component({
  selector: 'app-shopping-edit-component',
  templateUrl: './shopping-edit-component.component.html',
  styleUrls: ['./shopping-edit-component.component.css']
})
export class ShoppingEditComponentComponent implements OnInit {
  @Output() ingredientAdded = new EventEmitter<Ingredient>();
  @ViewChild('nameInput') nameInp: ElementRef;
  @ViewChild('amountInput') amountInp: ElementRef;
  // name= this.nameInp.nativeElement.value:string;
  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }

  onAddIngredient(){
    const newIngredient = new Ingredient(this.nameInp.nativeElement.value,this.amountInp.nativeElement.value);
    this.shoppingListService.addIngredient(newIngredient);
  }

}
