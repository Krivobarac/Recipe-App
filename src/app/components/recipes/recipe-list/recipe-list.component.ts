import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../../../_models/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('A test recipe', 'This is simply test', 'https://p1.pxfuel.com/preview/432/779/739/cooking-food-salads-vegetarianism.jpg'),
    new Recipe('new recipe', 'This is second recipe',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQfBR5zPvC1dEDXruKwVcit7gMVGQwDIWaVhathgs0PdYfr62ku&usqp=CAU')
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
  }

}
