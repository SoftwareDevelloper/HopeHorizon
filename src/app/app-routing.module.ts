import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ActionComponent } from './action/action.component';
import { AdminDashboardComponent } from './Admin/admin-dashboard/admin-dashboard.component';
import { CardsComponent } from './cards/cards.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SimulationComponent } from './simulation/simulation.component';
import { SportComponent } from './sport/sport.component';
import { StrategyComponent } from './strategy/strategy.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserUpdateComponent } from './user-update/user-update.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'register', component:RegisterComponent},
  { path: 'Action', component:ActionComponent},
  { path: 'Cards',component:CardsComponent},
  { path: 'Sport',component:SportComponent},
  {path: 'Simulation',component:SimulationComponent},
  {path: 'Strategy', component:StrategyComponent},
  {path: "About" , component:AboutComponent},
  {path: "login" , component:LoginComponent},
  {path:"AdminDashboard",component:AdminDashboardComponent},
  {path:"profile" , component:UserProfileComponent},
  {path:"updateProfile",component:UserUpdateComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
