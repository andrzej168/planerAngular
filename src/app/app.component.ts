
import {Component, ElementRef , ViewChild} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Event } from './event';
import * as _ from 'lodash';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  complexForm: FormGroup;

  eventsMonday: Array<Event>;
  eventsTuesday: Array<Event>;
  eventsWednesday: Array<Event>;
  eventsThursday: Array<Event>;
  eventsFriday: Array<Event>;
  eventsSaturday: Array<Event>;
  eventsSunday: Array<Event>;

  @ViewChild('closeModal') closeModal: ElementRef;

  events: Array<Event>;
  constructor(fb: FormBuilder) {
    this.events = [];
    this.complexForm = fb.group({
      'day': [null, Validators.required],
      'hour': [null, Validators.required],
      'description': [null, Validators.required]});
  }

  addEvent(day: string, hour: string, description: string) {
    const event = new Event(day, hour, description);
    console.log(event);
    console.log(this.events);
    this.events.push(event);
    this.events = _.sortBy(this.events, ['day', 'hour']);
    this.divideEvents();
    }

  removeEvent(event) {
    const index = this.events.indexOf(event);
    this.events.splice(index, 1);
    this.events = _.sortBy(this.events, ['day', 'hour']);
    this.divideEvents();
  }

  submitForm(value: any) {
    this.addEvent(value.day.valueOf(), value.hour, value.description);
    this.complexForm.reset();
    this.closeModal.nativeElement.click();
  }

  divideEvents() {
    this.eventsMonday = _.filter(this.events, function (v) { return v.day === "Poniedziałek"; });
    this.eventsTuesday = _.filter(this.events, function (v) { return v.day === "Wtorek"; });
    this.eventsWednesday = _.filter(this.events, function (v) { return v.day === "Środa"; });
    this.eventsThursday = _.filter(this.events, function (v) { return v.day === "Czwartek"; });
    this.eventsFriday = _.filter(this.events, function (v) { return v.day === "Piątek"; });
    this.eventsSaturday = _.filter(this.events, function (v) { return v.day === "Sobota"; });
    this.eventsSunday = _.filter(this.events, function (v) { return v.day === "Niedziela"; });
  }

}
