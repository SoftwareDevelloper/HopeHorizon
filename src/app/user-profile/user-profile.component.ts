import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  User = { id: 0, username: '', email: '', password: '' };
  userId = 1;
  FavoriteGames : any[] = []; 


  constructor(private authService: AuthService,private router:Router) {}

  ngOnInit(): void {
    this.loadUserInfo();
    this.loadFavoriteGames();
  }

  loadFavoriteGames(): void {
    this.authService.getFavoriteGames(this.userId).subscribe(
      (data:any)=>{
        this.FavoriteGames = data;
        console.log('Favorite games loaded:', this.FavoriteGames);
      },
      (error) => {
        console.error('Error loading favorite games:', error);
      }
    )
  }
  loadUserInfo(): void {
    this.authService.GetInternoteByUserId(this.userId).subscribe(
      (data: any) => {
        this.User = data;
        console.log('User loaded:', this.User);
      },
      (error) => {
        console.error('Error loading user:', error);
      }
    );
  }
  Logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}