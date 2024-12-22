import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-viewcards-games',
  templateUrl: './viewcards-games.component.html',
  styleUrls: ['./viewcards-games.component.css']
})
export class ViewcardsGamesComponent implements OnInit {

   item: any;
    constructor(private route: ActivatedRoute) { }
  
    ngOnInit(): void {
      // Get the id from the route
      const id = +this.route.snapshot.paramMap.get('id')!;
      // Find the corresponding item
      this.item = this.CardsItems.find((item) => item.id === id);
    }
  CardsItems = [
    {
      id:1,
      name: 'YU GI OH! DUEL LINKS',
      description: "Affrontez des Duellistes du monde entier avec Yu-Gi-Oh! Duel Links! Accédez à un monde à la croisée des dimensions qui relie tous les Duellistes. Trouvez toujours un Terrain de Duel dans le Monde de Duel, où que vous vous trouviez !",
      category1: "FREE TO PLAY",
      category2:"Anime",
      category3:"Strategie",
      Image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/601510/header_alt_assets_2_french.jpg?t=1716512796",
      Evaluation:"Plutot positives",
      Evals :"trés positives", 
      Dates :"17 November. 2017",
     DEVELLOPEMENT :"KONAMI",
      EDITION :"KONAMI",
    },
    {
      id:2,
      name: 'YU GI OH! MASTER DUEL',
      description: "Venez découvrir la version la plus complète du jeu de carte compétitif qui a évolué pendant plus de 20 ans ! Soyez prêt : c'est l'heure du Duel !",
      category1: "FREE TO PLAY",
      category2:"Anime",
      category3:"Strategie",
      Image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1449850/header_alt_assets_2_french.jpg?t=1717747561",
      Evaluation:"Moyenne",
      Evals :"Plutot positives", 
      Dates :"19 Janvier. 2022",
     DEVELLOPEMENT :"KONAMI",
      EDITION :"KONAMI",
    },
    {
      id:3,
      name: 'Yu-Gi-Oh! Legacy of the Duelist : Link Evolution ',
      description: "Constituez votre deck à partir de plus de 10 000 cartes et affrontez les plus grands duellistes de Yu-Gi-Oh!. Revivez les aventures de la série animée originale de Yu-Gi-Oh!, jusqu'à Yu-Gi-Oh! VRAINS!",
      category1: "FREE TO PLAY",
      category2:"Anime",
      category3:"Strategie",
      Image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1150640/header.jpg?t=1690437054",
      Evaluation:"Tres positives",
      Evals :"Tres positives", 
      Dates :"24 mars. 2020",
     DEVELLOPEMENT :"KONAMI",
      EDITION :"KONAMI",
    }
  ]
}
