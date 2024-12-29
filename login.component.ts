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
      next:(response)=>{
        const token = response.token;
        this.authService.saveToken(token);
        const role = response.role;
        if (role==='ADMIN') {
          alert('Bienvenue Admin');
          this.router.navigate(['/AdminDashboard']);
        }else if (role==='USER') {
          alert('Login successful');
          this.router.navigate(['/']);
        }
    },
    error:(err) => {
      console.error("Login failed: ", err);
      alert(err.error.error || 'Login failed');
    },
  });
}
}