import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { ActionComponent } from './action/action.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardsComponent } from './cards/cards.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RegisterComponent } from './register/register.component';
import { SimulationComponent } from './simulation/simulation.component';
import { SportComponent } from './sport/sport.component';
import { StrategyComponent } from './strategy/strategy.component';
import { ViewActionGamesComponent } from './Views/view-action-games/view-action-games.component';
import { ViewcardsGamesComponent } from './Views/viewcards-games/viewcards-games.component';
import { ViewsimulationGamesComponent } from './Views/viewsimulation-games/viewsimulation-games.component';
import { ViewsportGamesComponent } from './Views/viewsport-games/viewsport-games.component';
import { ViewstrategyGamesComponent } from './Views/viewstrategy-games/viewstrategy-games.component';
import { PipePipe } from './pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    RegisterComponent,
    ActionComponent,
    CardsComponent,
    SportComponent,
    SimulationComponent,
    StrategyComponent,
    AboutComponent,
    ViewActionGamesComponent,
    ViewcardsGamesComponent,
    ViewsimulationGamesComponent,
    ViewsportGamesComponent,
    ViewstrategyGamesComponent,
    LoginComponent,
    PipePipe,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
