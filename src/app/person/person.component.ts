import { Component, OnInit, Input } from '@angular/core';

import { Person } from '../person';

@Component({
  selector: 'person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  @Input() person : Person;

  isEditor : boolean;

  constructor() { 
    this.isEditor = false;
  }

  ngOnInit() {
  }

  switchEditor(){
    this.isEditor = !this.isEditor;
  }

}
