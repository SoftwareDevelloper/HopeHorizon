import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar-admin',
  templateUrl: './navbar-admin.component.html',
  styleUrls: ['./navbar-admin.component.css']
})
export class NavbarAdminComponent implements OnInit {

  isLoggedIn: boolean = false;
  userRole: string = '';

  constructor(private authService: AuthService, private router: Router) { } 

  ngOnInit(): void {
    this.updateLoginStatus();
  }
  updateLoginStatus() {
    this.isLoggedIn = this.authService.isLoggedIn();
    this.userRole = this.authService.getUserRole();
    console.log('Is Logged In:', this.isLoggedIn);  // Log to check status
    console.log('User Role:', this.userRole);  // Log the role
  }



  logout() {
    this.authService.logout();
    this.isLoggedIn = false;
    this.userRole = '';
    //console.log('Logged out, navbar updated.');
    this.router.navigate(['/login']);
  }
}
