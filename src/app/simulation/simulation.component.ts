import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simulation',
  templateUrl: './simulation.component.html',
  styleUrls: ['./simulation.component.css']
})
export class SimulationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  SimulationItems = [
    {
      id:1,
      name: 'City Car Driving',
      description: "City Car Driving – realistic car driving simulator, which will help you master the basic skills of the car driving in various traffic conditions, with plunging into the environment most closely resembling the real one.",
      category1: "FREE TO PLAY",
      category2:"Course",
      category3:"Simulation",
      Image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/493490/header.jpg?t=1698810885",
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
      category2:" Simulation course",
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
      name: 'F1® 24',
      description: "Join the grid and Be One of the 20. Drive like the Greatest in EA SPORTS™ F1® 24, the official video game of the 2024 FIA Formula One World Championship™.",
      category1: "FREE TO PLAY",
      category2:"Course",
      category3:"Simulation",
      Image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2488620/header.jpg?t=1721833230",
      Evaluation:"Mixed",
      Evals :"Mixed", 
      Dates :"08 septembre .2023",
     DEVELLOPEMENT :"Visual Concepts",
      EDITION :"2K",
    }
  ]
}
