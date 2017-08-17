import { Component } from '@angular/core';
import { ShoppingListService } from "app/ShoppingListComponents/shopping-list.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ ShoppingListService]
})
export class AppComponent {
  //title = 'app works!';
  loadedFeature = 'recipe';

  constructor(){}

  onNavigate(feature: string){
    this.loadedFeature = feature;
  }
}
