import { Component, OnInit } from '@angular/core';
import { Person } from '../persons/person';
import { AuthService } from 'src/app/web-services/auth.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  persons: Person;

  constructor(private router: Router, private authService: AuthService,
    private snackBar: MatSnackBar) { 
    this.persons = new Person;
  }

  SnackyLogin(){
    this.snackBar.open('Welcome to partyApps', 'Close', {
      duration: 3000,
      verticalPosition: 'top',
      panelClass: ['snacky']
    });
  }

  login(){
    if(this.persons.email == null || this.persons.password == null){
      alert("Please check username or password fields");
      return;
    }
    this.authService.login(this.persons).subscribe(
      response =>{
        console.log(response);
        let payload = JSON.parse(atob(response.access_token.split(".")[1]));
        this.authService.savePerson(response.access_token);
        this.authService.saveToken(response.access_token);
        this.router.navigate(['/']);
        this.SnackyLogin();
      },
      error =>{
        if (error.status == 400){
          alert("User or password wrong");
        }
      });
  }

  ngOnInit() {
    if(this.authService.isAuthenticated()){
      alert("signed in");
      this.router.navigate(['/']);
    }
  }

}
