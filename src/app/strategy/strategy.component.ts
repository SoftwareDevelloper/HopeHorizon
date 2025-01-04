import { Component, OnInit } from '@angular/core';
import { GamesService } from '../services/games.service';
@Component({
  selector: 'app-strategy',
  templateUrl: './strategy.component.html',
  styleUrls: ['./strategy.component.css']
})
export class StrategyComponent implements OnInit {

  games: any[] = []; 
    categoryId: number = 5;
  
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
