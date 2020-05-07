import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../../_models/ingredients.model';

@Component({
  selector: 'app-shoping-list',
  templateUrl: './shoping-list.component.html',
  styleUrls: ['./shoping-list.component.scss']
})
export class ShopingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10)
  ];

  constructor() { }

  ngOnInit() {
  }

  newIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }

}
