import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { jwtDecode } from "jwt-decode";
import { Observable, tap } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiURL = 'http://localhost:9000/Internote';
  constructor(private http : HttpClient) { }
  login(credentials: { email: string; password: string }): Observable<any> {
    return this.http.post(`${this.apiURL}/Login`, credentials).pipe(
      tap((response: any) => {
        const token = response.token; // Assuming the token is in response.token
        if (token) {
          this.saveToken(token);
          console.log('Token saved:', token); // Debugging
        }
      })
    );
  }
  

  saveToken(token: string) {
    console.log('Saving token:', token); // Debugging
    localStorage.setItem('token', token);
  }
  
  getUserRole() {
    const token = this.getToken();
    if (token) {
      try {
        const decoded: any = jwtDecode(token);
        console.log('Decoded token:', decoded); // Debugging
        return decoded.role || ''; // Return role or empty string if undefined
      } catch (error) {
        console.error('Error decoding token:', error);
      }
    }
    return '';
  }
  
  
  
  getToken() {
    const token = localStorage.getItem('token');
    console.log('Token retrieved from localStorage:', token); // Debugging
    return token;
  }
  
  isLoggedIn() {
    const token = this.getToken();
    console.log('Token:', token); // Debugging
    return token !== null; // Return true if the token exists, false otherwise
  }
  
  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('userRole');
  }
  register(data: any): Observable<any> {
    return this.http.post(`${this.apiURL}/Register`, data);
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
  GetInternoteByUserId(id: number): Observable<any> {
    return this.http.get(`${this.apiURL}/GetInternoteDTO/${id}`);
  }
  UpdateInternotePassword(data : any): Observable<any> {
    return this.http.put(`${this.apiURL}/UpdateUsersPassword/{id}`, data);
  }
  DeleteInternote(): Observable<any> {
    return this.http.delete(`${this.apiURL}/DeleteInternote/{id}`);
  }
    //Fetch all favorite games
    getFavoriteGames(user_id: number) {
      return this.http.get(`${this.apiURL}/favorites/${user_id}`);
    }
}
