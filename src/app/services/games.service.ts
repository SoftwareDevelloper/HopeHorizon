import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  private apiURL = 'http://localhost:9000/Games/GetGames';  // Correct endpoint

  constructor(private http: HttpClient) { }

  // Fetch all games by category
  getGamesByCategory(categoryId: number) {
    return this.http.get(`${this.apiURL}/${categoryId}`);
  }

}
