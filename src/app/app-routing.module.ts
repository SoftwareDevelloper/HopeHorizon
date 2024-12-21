import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ActionComponent } from './action/action.component';
import { CardsComponent } from './cards/cards.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SimulationComponent } from './simulation/simulation.component';
import { SportComponent } from './sport/sport.component';
import { StrategyComponent } from './strategy/strategy.component';
import { ViewActionGamesComponent } from './Views/view-action-games/view-action-games.component';
import { ViewcardsGamesComponent } from './Views/viewcards-games/viewcards-games.component';
import { ViewsimulationGamesComponent } from './Views/viewsimulation-games/viewsimulation-games.component';
import { ViewsportGamesComponent } from './Views/viewsport-games/viewsport-games.component';
import { ViewstrategyGamesComponent } from './Views/viewstrategy-games/viewstrategy-games.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'register', component:RegisterComponent},
  { path: 'Action', component:ActionComponent},
  { path: 'Cards',component:CardsComponent},
  { path: 'Sport',component:SportComponent},
  {path: 'Simulation',component:SimulationComponent},
  {path: 'Strategy', component:StrategyComponent},
  {path: "About" , component:AboutComponent},
  {path: "action/:id",component:ViewActionGamesComponent},
  {path: "cards/:id",component:ViewcardsGamesComponent},
  {path: "simulation/:id",component:ViewsimulationGamesComponent},
  {path: "sport/:id",component:ViewsportGamesComponent},
  {path: "strategy/:id",component:ViewstrategyGamesComponent},
  {path: "login" , component:LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
