import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  constructor() { }

  ItServices = [
  'Infosys',
  'TCS',
  'Innovate'
  ];

  myfav() {
   return "This is my first Angular 4 trail project and Going to Animate it";
  }
}
