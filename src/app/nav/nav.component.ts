import { Component, OnInit } from '@angular/core';
import { AuthService } from '../web-services/auth.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  title = 'PartyApps';

  constructor(public authService: AuthService, private router: Router,
              private snackBar: MatSnackBar) { }

  SnackyLogout() {
    this.snackBar.open('You have signed out', 'Close', {
      duration: 3000,
      verticalPosition: 'top',
      panelClass: ['snacky']
    });
  }

  logout() {
    this.authService.logout();
    this.SnackyLogout();
    this.router.navigate(['/']);
  }

  ngOnInit() {
  }

}
