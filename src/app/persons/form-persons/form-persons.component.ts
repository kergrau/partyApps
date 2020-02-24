import { Component, OnInit } from '@angular/core';
import { Person } from '../person';
import { PersonService } from 'src/app/web-services/person.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-persons',
  templateUrl: './form-persons.component.html',
  styleUrls: ['./form-persons.component.css']
})
export class FormPersonsComponent implements OnInit {

  hide = true;
  private persons: Person = new Person();
  constructor(private perService: PersonService, private router: Router) { }

  Create(){
    this.perService.createPerson(this.persons).subscribe(
      data => {
        alert("Created");
        this.router.navigate(["/"]);
      }
    )
  }

  ngOnInit() {
  }

}
