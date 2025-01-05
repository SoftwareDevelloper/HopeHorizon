import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { GamesService } from '../services/games.service';


@Component({
  selector: 'app-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.css']
})
export class ActionComponent implements OnInit {

  games: any[] = []; 
  categoryId: number = 1;

  constructor(private gamesService: GamesService,private authService:AuthService) { }


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

  //Add game to favorite list
  addToFavorite(gameId: number): void {
    const user_id = this.authService.getUserId(); 
    console.log('Retrieved userId:', user_id); 
  
    if (!user_id) {
      console.error('User ID required to add to favorites');
      return;
    }
  this.authService.addFavoriteGame(user_id, gameId, {}).subscribe(
      (response: any) => {
        console.log('Game added to favorites successfully', response);
        alert('Game added to favorites successfully');
      },
      (error: any) => {
        console.error('Error adding game to favorites', error);
      }
    );

  
}
}