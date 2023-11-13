import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Recipe } from '../Models';


@Injectable({providedIn: 'root'})

export class RecipeService {

    private baseUrl: string = 'http://localhost:3000/';

    constructor(private httpClient: HttpClient) { }
    
    getRecipes(): Observable<Recipe[]> {
        return this.httpClient.get<Recipe[]>(`${this.baseUrl}/recipes`);
    }
}