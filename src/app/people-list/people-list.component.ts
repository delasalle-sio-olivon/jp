import { Component, OnInit } from '@angular/core';
import { Observable, Subject, Subscription } from 'rxjs';
import { PersonService} from '../person.service';
import { Person } from '../person';

@Component({
  selector: 'people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent implements OnInit {

  people : Person[];
  peopleObs : Observable<Person[]>;
  peopleObsSub : Subscription;
  personObs : Subject<Person>;
  personObsSub : Subscription;
  person : Person;
  constructor(private personService : PersonService) { }

  ngOnInit() {
    this.peopleObs = this.personService.getAll();
    this.peopleObs.subscribe(res => this.setPeopleFromObs(res));
    this.personObs = new Subject<Person>();
    this.personObs.subscribe(res => this.setPersonFromObs(res));
  }

  setPeopleFromObs(res){
    this.people = res;
  }

  hasPerson() : boolean{
    if(this.person !== undefined && this.person !== null) return true;
    return false;
  }

  selectPerson(person){
      this.personObs.next(person);
  }

  setPersonFromObs(person){
    this.person = person;
  }

}
