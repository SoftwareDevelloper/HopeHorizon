import { Component, OnInit } from '@angular/core';
import { GamesService } from '../services/games.service';

@Component({
  selector: 'app-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.css']
})
export class ActionComponent implements OnInit {

  games: any[] = []; 
  categoryId: number = 1;

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