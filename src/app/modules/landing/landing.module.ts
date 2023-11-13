import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CarouselModule } from '../carousel/carousel.module';
import { RecipeModule } from '../recipe/recipe.module';
import { ListRecipesComponent } from '../recipe/list-recipes/list-recipes.component';


@NgModule({
    declarations: [
        LandingPageComponent,
    ],
    imports: [
        CommonModule,
        SharedModule,
       CarouselModule  ,
       RecipeModule
    ]
})
export class LandingModule { }
