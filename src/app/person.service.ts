import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Http } from '@angular/http';

import { Person } from './person';
@Injectable()
export class PersonService {

  constructor(private http : Http) { }

  getAll() : Observable<Person[]>{
    return this.http.get('http://localhost/jpback/public/api/people').map(res => res.json());
  }
}
