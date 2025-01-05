import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AboutComponent } from './about/about.component';
import { ActionComponent } from './action/action.component';
import { AdminDashboardComponent } from './Admin/admin-dashboard/admin-dashboard.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardsComponent } from './cards/cards.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PipePipe } from './pipe.pipe';
import { RegisterComponent } from './register/register.component';
import { SimulationComponent } from './simulation/simulation.component';
import { SportComponent } from './sport/sport.component';
import { StrategyComponent } from './strategy/strategy.component';
import { NavbarAdminComponent } from './Admin/navbar-admin/navbar-admin.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserUpdateComponent } from './user-update/user-update.component';
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
    LoginComponent,
    PipePipe,
    AdminDashboardComponent,
    NavbarAdminComponent,
    UserProfileComponent,
    UserUpdateComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
