import { Component, OnInit } from '@angular/core';
import { Person } from '../person';
import { PersonService } from 'src/app/web-services/person.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-form-persons',
  templateUrl: './form-persons.component.html',
  styleUrls: ['./form-persons.component.css']
})
export class FormPersonsComponent implements OnInit {

  hide = true;
  public persons: Person = new Person();
  constructor(private perService: PersonService, private router: Router,
              private snackBar: MatSnackBar) { }


  SnackyCreated() {
    this.snackBar.open('You Signed up successfully', 'Close', {
      duration: 3000,
      verticalPosition: 'top',
      panelClass: ['snacky']
    });
  }

  Create() {
    this.perService.createPerson(this.persons).subscribe(
      data => {
        this.SnackyCreated();
        this.router.navigate(['/']);
      }
    );
  }

  ngOnInit() {
  }

}
