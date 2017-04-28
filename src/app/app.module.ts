import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from '@angular/material';
import "hammerjs";

import { AppComponent } from './app.component';
import { PersonComponent } from './person/person.component';
import { PeopleListComponent } from './people-list/people-list.component';

import { PersonService } from './person.service';


@NgModule({
  declarations: [
    AppComponent,
    PersonComponent,
    PeopleListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    MaterialModule
  ],
  providers: [ PersonService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
