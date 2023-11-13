import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/core/Models';
import { RecipeService } from 'src/app/core/services/recipe.service';

@Component({
  selector: 'app-list-recipes',
  templateUrl: './list-recipes.component.html',
  styleUrls: ['./list-recipes.component.css']
})
export class ListRecipesComponent implements OnInit {

  public recipes: Recipe[] = [];
  
  constructor(private recipesService: RecipeService) { }

  ngOnInit(): void {
    this.recipesService.getRecipes().subscribe(recipes => this.recipes = recipes);
  }

}
