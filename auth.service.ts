import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  addFavoriteGame(gameid: number, userId: number) {
    throw new Error('Method not implemented.');
  }
  private apiURL = 'http://localhost:9000/Internote';
  constructor(private http : HttpClient) { }
  login(credentials:{email:string;password:string}): Observable<any> {
    return this.http.post(`${this.apiURL}/Login`, credentials);
  }
  saveToken(token: string) {
  localStorage.setItem('jwt', token);
  }
  getToken() {
    return localStorage.getItem('jwt');
  }
  isLoggedIn() {
    const token = this.getToken();
    return token ;
  }
  logout() {
    localStorage.removeItem('jwt');
  }
  register(credentials: { username: string; email: string; password: string }): Observable<any> {
    return this.http.post(`${this.apiURL}/RegisterUsers`, credentials, {
      headers: { 'Content-Type': 'application/json' }
    });
  }
  
  AddInternote(data : any): Observable<any> {
    return this.http.post(`${this.apiURL}/AddInternote`, data);
  }
  GetInternotes(): Observable<any> {
    return this.http.get(`${this.apiURL}/GetAllInternote`);
  }
  GetInternoteById(): Observable<any> {
    return this.http.get(`${this.apiURL}/GetInternote`);
  }
  UpdateInternotePassword(data : any): Observable<any> {
    return this.http.put(`${this.apiURL}/UpdateUsersPassword`, data);
  }
  DeleteInternote(): Observable<any> {
    return this.http.delete(`${this.apiURL}/DeleteInternote`);
  }
  
}
