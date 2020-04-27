import { Component, OnInit } from '@angular/core';
import { Igredient } from '../_models/ingredients.model';

@Component({
  selector: 'app-shoping-list',
  templateUrl: './shoping-list.component.html',
  styleUrls: ['./shoping-list.component.scss']
})
export class ShopingListComponent implements OnInit {
  ingredients: Igredient[] = [
    new Igredient('Apples', 5),
    new Igredient('Tomatoes', 10)
  ];

  constructor() { }

  ngOnInit() {
  }

}
