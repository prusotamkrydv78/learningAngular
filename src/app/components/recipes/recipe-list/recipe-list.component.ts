import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { log } from 'console';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [new Recipe('testName', 'this is a test for recipe', 'https://www.allrecipes.com/thmb/KzSZ5rtc8-ahZyIFKEy1avZd1lk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/67700_RichPastaforthePoorKitchen_ddmfs_2x1_2283-fb3330bd0d3b41c7bd1543336ad4833f.jpg')];
  
  
  constructor() {}

  ngOnInit(): void {
    console.log(Recipe)
    console.log(this.recipes);
    
  }
}
