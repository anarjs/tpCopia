export interface IUser {
    id: number;
    isAdmin?: boolean;
    userName: string;
    email: string;
    password: string;
    favoritesRecipies?: number[];
    addComments?: number[];
  }

  export interface IRecipe {
    recipeId: number;
    recipeName: string;
    ingredients: string[];
    instructions: string[];
    image: string;
    comments?: IComment[];
  }

  export interface IComment {
    id: number;
    comment: string;
    userId: number;
    recipeId: number;
  }