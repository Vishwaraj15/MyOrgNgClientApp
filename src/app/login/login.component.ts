import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  invalidLogin: boolean;
  
  constructor(private http: HttpClient,private router: Router) { }

  ngOnInit() {
  }

  login(form: NgForm) {
    let credentials = JSON.stringify(form.value);
    this.http.post("http://localhost:55684/api/auth/login", credentials, {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    }).subscribe(response => {
      console.log(response);
      let token = (<any>response).Token;
      console.log(token);
      localStorage.setItem("jwt", token);
      this.invalidLogin = false;
      this.router.navigate(["/"]);
    }, err => {
      this.invalidLogin = true;
    });
  }

  logOut() {
    localStorage.removeItem("jwt");
 }

}
