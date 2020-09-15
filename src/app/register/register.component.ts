import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './../services/auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  // Create object that will hold the users email and password from the form
  registerUserData = {
    email: String,
    password: String
  };

  constructor(private _router: Router, private _auth: AuthService) { }

  ngOnInit(): void {
  }

  // This gets triggered from the form in template after button click
  registerUser(email, pass){
    this.registerUserData.email = email;
    this.registerUserData.password = pass;

    // Pass the user data to the 'registerUser' method in the AuthService
    // Also we need to subscribe to the observable, so we will either get the response or an error
    // Make sure to console.log whatever response we might expect
    this._auth.registerUser(this.registerUserData).subscribe(
      (res:any) => {
        console.log(res)
        localStorage.setItem('token', res.token)
        this._router.navigate(['/play'])
      },
      err => console.log(err)
    );

    console.log(this.registerUserData);
  }

}
