import { Component, OnInit } from '@angular/core';
import { GamesService } from '../services/games.service';

@Component({
  selector: 'app-sport',
  templateUrl: './sport.component.html',
  styleUrls: ['./sport.component.css']
})
export class SportComponent implements OnInit {

  games: any[] = []; 
    categoryId: number = 3;
  
    constructor(private gamesService: GamesService) { }
  
    ngOnInit(): void {
      this.loadGames(); 
    }
  
    // Load games by category
    loadGames(): void {
      this.gamesService.getGamesByCategory(this.categoryId).subscribe(
        (data: any) => {
          this.games = data; // Store the fetched games
          console.log("games:", this.games);
        },
        (error) => {
          console.log("error fetching games", error);
        }
      );
    }
}
