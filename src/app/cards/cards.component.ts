import { Component, OnInit } from '@angular/core';
import { GamesService } from '../services/games.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

 games: any[] = []; 
   categoryId: number = 2;
 
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
