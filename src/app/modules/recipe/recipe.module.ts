import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListRecipesComponent } from './list-recipes/list-recipes.component';



@NgModule({
  declarations: [
    ListRecipesComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ListRecipesComponent
  ]
})
export class RecipeModule { }
