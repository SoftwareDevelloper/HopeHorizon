import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.css']
})
export class ActionComponent implements OnInit {
sanitizer: any;

  constructor() { }

  ngOnInit(): void {
  }
  ActionItems = [
    {
      id:1,
      name: 'FINAL FANTASY XIV Online',
      description: "Rejoignez 27 millions d'aventuriers en ligne et vivez une expérience FINAL FANTASY épique. Profitez d'un scénario inoubliable, de combats grisants et d'une pléthore d’environnements captivants à explorer.",
      category: "MMORG,2PLAYER,RPG,MAGIC",
      Image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/39210/header_french.jpg?t=1711488174",
      Evaluation:"Trés positives",
      Evals :"trés positives", 
      Dates :"18 févr. 2014",
     DEVELLOPEMENT :"SQUARE ENIX",
      EDITION :"SQUARE ENIX",
    },
    {
      id:2,
      name: 'ELDEN RING',
      description:"NE NOUVELLE AVENTURE GRANDIOSE VOUS ATTEND Levez-vous, Sans-éclat, et puisse la grâce guider vos pas. Brandissez la puissance du Cercle d'Elden. Devenez Seigneur de l'Entre-terre.",
      Image:"https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1245620/header_alt_assets_2_french.jpg?t=1719417781",
      Evaluation:"moyenne",
      Evals :"moyenne", 
      Dates :"20 févr. 2024",
     DEVELLOPEMENT :"FromSoftware Inc.",
      EDITION :"FromSoftware Inc.",
    },
  
    {
      id:3,
      name:'Call of Duty®',
      description:"Le QG Call of Duty® prend en charge Call of Duty®: Black Ops 6, Call of Duty®: Modern Warfare® III, Call of Duty®: Modern Warfare® II et Call of Duty®: Warzone™.",
      Image:"https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1938090/header.jpg?t=1719263879",
      Evaluation:"moyenne",
      Evals :"moyenne", 
      Dates :"28 févr. 2022",
     DEVELLOPEMENT :"Sledgehammer Games, Treyarch",
      EDITION :"Activision",
    },
    {
      id:4,
      name:'Snowbreak: Containment Zone',
      description:"Snowbreak: Containment Zone, FPS et RPG de science-fiction en 3D en bêta ! Visez le destin et terminez les niveaux pour obtenir un personnage de qualité orange !",
      Image:"https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2668080/header.jpg?t=1717404762",
      Evaluation:"Trés positive",
      Evals :"Plutot positives", 
      Dates :"25 déc. 2023",
     DEVELLOPEMENT :"Amazing Seasun Games",
      EDITION :"Amazing Seasun Games",
    },
    {
      id:5,
      name:"Forza Horizon 4",
      description:"Les saisons dynamiques changent tout sur le plus grand festival automobile au monde. En solo ou en équipe, explorez les magnifiques paysages du Royaume-Uni historique dans un monde ouvert partagé.",
      Image:"https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1293830/header.jpg?t=1702576030",
      Evaluation:"Trés positive",
      Evals :"Plutot positives", 
      Dates : "9 mars. 2021",
     DEVELLOPEMENT :"Playground Games",
      EDITION :"Xbox Game Studios",
    },
    {
      id:6,
      name:"Horizon Forbidden West™ Complete Edition",
      description:"Profitez de l'expérience Horizon Forbidden West™ complète grâce à du contenu bonus et l'extension Burning Shores. L'extension Burning Shores inclut du contenu additionnel, avec des quêtes, personnages et expériences inédits dans une nouvelle zone aussi magnifique qu'impitoyable.",
      Image:"https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2420110/header.jpg?t=1717622622",
      Evaluation:"Trés positive",
      Evals :"Plutot positives", 
      Dates : "21 mars. 2024",
     DEVELLOPEMENT :"Guerrilla, Nixxes Software",
      EDITION :"PlayStation Publishing LLC",
    },
  ];

}
