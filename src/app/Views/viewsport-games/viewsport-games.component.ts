import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-viewsport-games',
  templateUrl: './viewsport-games.component.html',
  styleUrls: ['./viewsport-games.component.css']
})
export class ViewsportGamesComponent implements OnInit {

  item: any;
    constructor(private route: ActivatedRoute) { }
  
    ngOnInit(): void {
      // Get the id from the route
      const id = +this.route.snapshot.paramMap.get('id')!;
      // Find the corresponding item
      this.item = this.SportItems.find((item) => item.id === id);
    }
    SportItems = [
      {
        id:1,
        name: ' KARTRIDER DRIFT',
        description: "KartRider: Drift est le jeu de course de karts free-to-play, amusant et multiplateforme réunissant frissons de l'arcade, compétition à base de dérapages express et liberté donnée aux joueurs pour personnaliser leurs personnages et leurs karts.",
        category1: "FREE TO PLAY",
        category2:"Course",
        category3:"Sport",
        Image: "https://i.ytimg.com/vi_webp/mr8oO7aHg2g/maxresdefault.webp",
        Evaluation:"Plutot positives",
        Evals :"Plutot positives", 
        Dates :"10 juin .2023",
       DEVELLOPEMENT :"NEXON Korea Corporation",
        EDITION :"Nexon America Inc.",
      },
      {
        id:2,
        name: 'Forza Horizon 5',
        description: "Explorez un monde ouvert plein de vie dans les paysages du Mexique et vibrez au volant de voitures d'exception. Partez à la conquête des pistes accidentées de la Sierra Nueva dans cette expérience ultime du Rallye Horizon. Nécessite le jeu Forza Horizon 5, extension vendue séparément.",
        category1: "FREE TO PLAY",
        category2:"Course",
        category3:"Sport",
        Image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1551360/header.jpg?t=1721149726",
        Evaluation:"trés positives",
        Evals :"trés positives", 
        Dates :"09 Nov .2021",
       DEVELLOPEMENT :"Playground Games",
        EDITION :"Xbox Game Studios",
      },
      {
        id:3,
        name: 'NBA 2K24',
        description: "Retrouvez toute la culture du basket dans NBA 2K24. Vivez l'action intensément et profitez des options personnalisées Mon JOUEUR illimitées, dans Ma CARRIÈRE. Créez l'équipe de vos rêves dans MyTEAM. Jouez avec vos équipes NBA et WNBA préférées dans JOUEZ, avec une jouabilité encore...",
        category1: "FREE TO PLAY",
        category2:"Course",
        category3:"Sport",
        Image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2338770/header.jpg?t=1719588484",
        Evaluation:"Moyenne",
        Evals :"Plutot negatives", 
        Dates :"08 septembre .2023",
       DEVELLOPEMENT :"Visual Concepts",
        EDITION :"2K",
      }
    ]
}
