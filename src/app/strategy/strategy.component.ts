import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-strategy',
  templateUrl: './strategy.component.html',
  styleUrls: ['./strategy.component.css']
})
export class StrategyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  StrategyItems = [
    {
      id:1,
      name: 'Builders of Greece',
      description: "Immerse yourself in the beautifully recreated golden age of Hellenic city-states. Builders of Greece is a city management game that lets you display your strategic and economic mastery. Build your Polis from scratch, make meaningful decisions, trade, fight and expand to become the ultimate ruler.",
      category1: "FREE TO PLAY",
      category2:"Category",
      Image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1273100/header.jpg?t=1721944112",
      Evaluation:"Plutot positives",
      Evals :"Mixed", 
      
    },
    {
      id:2,
      name: 'Total War: WARHAMMER III',
      description: "The cataclysmic conclusion to the Total War: WARHAMMER trilogy is here. Rally your forces and step into the Realm of Chaos, a dimension of mind-bending horror where the very fate of the world will be decided. Will you conquer your Daemons… or command them?",
      category1: "FREE TO PLAY",
      category2:" Category",
      category3:"Sport",
      Image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1142710/header.jpg?t=1719611574",
      Evaluation:"trés positives",
      Evals :"trés positives", 
      
    },
    {
      id:3,
      name: 'Manor Lords',
      description: "Manor Lords is a medieval strategy game featuring in-depth city building, large-scale tactical battles, and complex economic and social simulations. Rule your lands as a medieval lord – the seasons pass, the weather changes, and cities rise and fall.",
      category1: "FREE TO PLAY",
      category2:"Strategy",
      
      Image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1363080/header.jpg?t=1721906381",
      Evaluation:"trés positives",
      Evals :"trés positives", 
     
    }
  ]
}
