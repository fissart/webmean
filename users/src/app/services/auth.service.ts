import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private URL = environment.apiURL;
  constructor(private http: HttpClient, private router: Router) { }

  signUpUser(user:any) {
    return this.http.post<any>(this.URL + '/signup', user);
  }

  signInUser(user:any) {
    return this.http.post<any>(this.URL + '/signin', user);
  }

  loggedIn() {
    return !!localStorage.getItem('id');
  }

  logout() {
    localStorage.removeItem('id');
    localStorage.removeItem('rol');
    localStorage.removeItem('idcurso');
    localStorage.removeItem('imguser');

    this.router.navigate(['/login']);
  }

  getToken() {
    return localStorage.getItem('id');
  }

}
