import { Component, OnInit } from '@angular/core';
import { AuthService } from '../web-services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  logout(){
    this.authService.logout();
    alert("You have signed out");
    this.router.navigate(['/']);
  }

  title = 'PartyApps'
  ngOnInit() {
  }

}
