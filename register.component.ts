import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  RegisterData = {username: '', email: '', password: ''};
  constructor(private http:HttpClient,private authService:AuthService,private router:Router) { }

  ngOnInit(): void {
  }
  OnSubmit() {
    this.authService.register(this.RegisterData).subscribe({
      next:(response)=>{
        alert('Registered successful');
        this.router.navigate(['/login']);
    },
    error:(err) => {
      console.error("Register failed: ", err);
      alert('Register failed');
    },
  });
}
}
