import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../_models/recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A test recipe', 'This is simply test', 'https://p1.pxfuel.com/preview/432/779/739/cooking-food-salads-vegetarianism.jpg'),
    new Recipe('A test recipe', 'This is simply test', 'https://p1.pxfuel.com/preview/432/779/739/cooking-food-salads-vegetarianism.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
