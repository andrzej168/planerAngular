export class Event {
  day: string;
  hour: string;
  description: string;

  constructor(day: string, hour: string, description: string) {
    this.day = day;
    this.hour = hour;
    this.description = description;
  }

}
