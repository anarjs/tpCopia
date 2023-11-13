import { IComment, IRecipe, IUser } from "./Interfaces";

export class User implements IUser {

  id: number;
  isAdmin?: boolean | undefined;
  userName: string;
  email: string;
  password: string;
  favoritesRecipies?: number[] | undefined;
  addComments?: number[] | undefined;

  constructor(user?: any) {
    this.id = user.id != null ? user.id : null;
    this.userName = user.userName != null ? user.userName : null;
    this.email = user.email != null ? user.email : null;
    this.password = user.password != null ? user.password : null;
    this.isAdmin = user.isAdmin != null ? user.isAdmin : false;
    this.favoritesRecipies = user.favoritesRecipies != null ? user.favoritesRecipies : [];
    this.addComments = user.addComments != null ? user.addComments : [];
  }

}

export class Recipe implements IRecipe {

  recipeId: number = 0;
  recipeName: string = '';
  ingredients: string[] = [];
  instructions: string[] = [];
  image: string = '';
  comments?: IComment[] | undefined;

  constructor(recipe?: any) {
    this.recipeId = recipe.recipeId != null ? recipe.recipeId : null;
    this.recipeName = recipe.recipeName != null ? recipe.recipeName : null;
    this.ingredients = recipe.ingredients != null ? recipe.ingredients : [];
    this.instructions = recipe.instructions != null ? recipe.instructions : [];
    this.image = recipe.image != null ? recipe.image : null;
    this.comments = recipe.comments != null ? recipe.comments : [];
  }

}

  export class Comment implements IComment {
      
      id: number = 0;
      comment: string = '';
      userId: number = 0;
      recipeId: number = 0;
  
      constructor(comment?: any) {
        this.id = comment.id != null ? comment.id : null;
        this.comment = comment.comment != null ? comment.comment : null;
        this.userId = comment.userId != null ? comment.userId : null;
        this.recipeId = comment.recipeId != null ? comment.recipeId : null;
      }
  
    }

