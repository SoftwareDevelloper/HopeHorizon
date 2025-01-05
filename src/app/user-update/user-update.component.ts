import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css']
})
export class UserUpdateComponent implements OnInit {

  UsersUpdate = { id: 0, username: '', email: '', password: '' };
  id = 1;
  constructor(private AuthService:AuthService,private router:Router) { }

  ngOnInit(): void {}
  UpdateUserInfo(){
    this.AuthService.UpdateInternote(this.id,this.UsersUpdate).subscribe(
      (data:any)=>{
        console.log('User updated :',data);
        this.router.navigate(['profile']);
      },
      (error:any)=>{
        console.error('Error updating user:',error);
      }
    )
  }
}
