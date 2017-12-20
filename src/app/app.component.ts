
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
    this.addEvent(value.day, value.hour, value.description);
    this.complexForm.reset();
    this.closeModal.nativeElement.click();
  }

  divideEvents() {
    this.eventsMonday = [];
    this.eventsTuesday = [];
    this.eventsWednesday = [];
    this.eventsThursday = [];
    this.eventsFriday = [];
    this.eventsSaturday = [];
    this.eventsSunday = [];
    for (const event of this.events) {
        if (event.day === 'Poniedziałek') {
          this.eventsMonday.push(event);
        }
        if (event.day === 'Wtorek')  {
          this.eventsTuesday.push(event);
        }
        if (event.day === 'Środa')  {
          this.eventsWednesday.push(event);
        }
        if (event.day === 'Czwartek')  {
          this.eventsThursday.push(event);
        }
        if (event.day === 'Piątek')  {
          this.eventsFriday.push(event);
        }
        if (event.day === 'Sobota')  {
          this.eventsSaturday.push(event);
        }
        if (event.day === 'Niedziela')  {
          this.eventsSunday.push(event);
        }
    }
    this.eventsMonday = _.sortBy(this.eventsMonday, ['day', 'hour']);
    this.eventsTuesday = _.sortBy(this.eventsTuesday, ['day', 'hour']);
    this.eventsWednesday = _.sortBy(this.eventsWednesday, ['day', 'hour']);
    this.eventsThursday = _.sortBy(this.eventsThursday, ['day', 'hour']);
    this.eventsFriday = _.sortBy(this.eventsFriday, ['day', 'hour']);
    this.eventsSaturday = _.sortBy(this.eventsSaturday, ['day', 'hour']);
    this.eventsSunday = _.sortBy(this.eventsSunday, ['day', 'hour']);
  }

}
