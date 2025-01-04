import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLoggedIn: boolean = false;
  userRole: string = '';

  constructor(private authService: AuthService,private router : Router) { }

  ngOnInit(): void {
    // Check login status when the component initializes
    this.updateLoginStatus();
  }

  // Check login status and update variables
  updateLoginStatus() {
    this.isLoggedIn = this.authService.isLoggedIn();
    this.userRole = this.authService.getUserRole();
    console.log('Is Logged In:', this.isLoggedIn);  // Log to check status
    console.log('User Role:', this.userRole);  // Log the role
  }

  isMenuOpen = false;
  isUserOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    if (this.isUserOpen) {
      this.isUserOpen = false; 
    }
  }

  userProfile() {
   this.router.navigate(['/profile']);
  }

  logout() {
    this.authService.logout();
    this.isLoggedIn = false;
    this.userRole = '';
    //console.log('Logged out, navbar updated.');
    this.router.navigate(['/login']);
  }
}
