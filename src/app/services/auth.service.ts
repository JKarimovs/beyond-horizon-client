import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from './../../environments/environment';

// Production and Dev Api URLs are stored in the environment variables.
// Depending which enviroment is run (dev or production) a different URL will be used.
const API_URL = environment.apiURL;

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _registerUrl = API_URL + "/register";
  private _loginUrl = API_URL + "/login";

  constructor(private http: HttpClient, private _router: Router) { }

  // Make a http request to the registration API with the user object (and therefore data) passed to it
  // The 'return' returns the server response whenever available
  registerUser(user){
    return this.http.post(this._registerUrl, user);
  }

  // Make a http request to the login API with the user object (and therefore data) passed to it
  // The 'return' returns the server response whenever available
  loginUser(user){
    return this.http.post(this._loginUrl, user);
  }


  loggedIn() {  // Checks if token exists. Returns boolean.
    if(localStorage.getItem('token')){
      return true; }
    else {
      return false; }
  }

  logoutUser() {
    localStorage.removeItem('token');
    this._router.navigate(['/login']);
  }

  getToken() {
    return localStorage.getItem('token');
  }

}
