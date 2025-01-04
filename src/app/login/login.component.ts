import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  LoginData = {email: '', password: ''};
  constructor(private authService:AuthService,private router :Router) { }

  ngOnInit(): void {
  }
  OnSubmit() {
    this.authService.login(this.LoginData).subscribe({
      next: (response) => {
        console.log('Login response:', response); // Log the whole response for debugging
        const token = response.token;
        const role = response.role;
  
        if (token) {
          this.authService.saveToken(token);
          console.log('Token saved:', token); // Log the token to check if it's saved correctly
        }
  
        if (role === 'ADMIN') {
          alert('Bienvenue Admin');
          this.router.navigate(['/AdminDashboard']);
        } else if (role === 'USER') {
          alert('Login successful');
          this.router.navigate(['/']);
        } else {
          alert('Unknown role');
        }
      },
      error: (err) => {
        console.error('Login failed:', err);
        const errorMessage = err.error?.message || 'Login failed';
        alert(errorMessage);
      },
    });
  }
}