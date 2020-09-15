import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './../services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // Object property for holding user login data
  loginUserData = {
    email: String,
    password: String
  };

  constructor(private _router: Router, private _auth: AuthService) { }

  ngOnInit(): void {
  }

  // Gets triggered from the template file via click handler
  loginUser(email, pass){
    this.loginUserData.email = email;
    this.loginUserData.password = pass;

    // Send the user data to the service and subscribe to get the response from the server
    // Response is either error message or success response message
    this._auth.loginUser(this.loginUserData).subscribe(
      (res:any) => {
        console.log(res)
        localStorage.setItem('token', res.token)
        this._router.navigate(['/play'])
      },
      err => (console.log(err))
    )
  }

}
