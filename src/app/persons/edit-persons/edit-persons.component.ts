import { Component, OnInit } from '@angular/core';
import list from 'src/app/list.json';
import { Person} from '../person';
import { PersonService } from 'src/app/web-services/person.service';

@Component({
  selector: 'app-edit-persons',
  templateUrl: './edit-persons.component.html',
  styleUrls: ['./edit-persons.component.css']
})
export class EditPersonsComponent implements OnInit {

  private persons: Person = new Person();
  constructor(private perService: PersonService) { }

  hide = true;
  
  Update(){

    this.perService.editPerson(this.persons)
    .subscribe(data => {
      alert("Updated")
    });
  }

  ngOnInit() {
    list.forEach(element => {
      this.persons = {
        id: element.id,
        name: element.name,
        surname: element.surname,
        phone: element.phone,
        email: element.email,
        password: element.password,
        admin: element.admin
      }
    });
  }

}