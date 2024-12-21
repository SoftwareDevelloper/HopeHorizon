import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
}
isMenuOpen = false;
isUserOpen = false;

toggleMenu() {
  this.isMenuOpen = !this.isMenuOpen;
  if (this.isUserOpen) {
    this.isUserOpen = false; 
  }
}

ToggleUserMenu() {
  this.isUserOpen = !this.isUserOpen;
  if (this.isMenuOpen) {
    this.isMenuOpen = false; 
  }
}

}
