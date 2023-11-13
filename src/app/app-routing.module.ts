import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListRecipesComponent } from './modules/recipe/list-recipes/list-recipes.component';
import { LandingPageComponent } from './modules/landing/components/landing-page/landing-page.component';
import { Error404Component } from './shared/error404/error404.component';
import { CarouselComponent } from './modules/carousel/components/carousel.component';

const routes: Routes = [

  {
    path: 'listRecipes',
    component: ListRecipesComponent
  },
  {
    path:'landing',
    component: LandingPageComponent,
    loadChildren:()=> import("./modules/landing/landing.module").then(m => m.LandingModule)  
 },
 {
  path: 'auth',
  loadChildren:() => import("./modules/auth/auth.module").then(m =>m.AuthModule)

 },

 {
  path: '404',
  component: Error404Component
 },
 {
  path: 'carousel',
  component: CarouselComponent
 },

 {
  path:'',
  redirectTo: 'landing',
  pathMatch:'full'
 },
 {
  path:'**',
  component:Error404Component
 }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
