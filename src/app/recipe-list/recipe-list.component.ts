import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Array<object>;

  constructor() { 
    this.recipes = [
      {
        name: 'Pasta Sauce',
        ingredients: ['chuck roast', 'onions', 'vegetable oil', 'garlic', 'tomato sauce', 'tomato paste'],
        directions: 'Brown chuck roast in oil and remove from pan. Sauté onions and garlic in oil and remove from pan. Add tomato paste and sauté. Add cans of tomato sauce and simmer until finished.'
      },
      {
        name: 'Chocolate Cake',
        ingredients: ['flour', 'eggs', 'chocolate', 'orange juice'],
        directions: 'Combine dry ingredients and wet ingredients in separate bowls. Then, combine both and bake.'
      }];    
    };  

  ngOnInit() {
  }

}
