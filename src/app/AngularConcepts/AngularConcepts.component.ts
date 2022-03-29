import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-AngularConcepts',
  templateUrl: './AngularConcepts.component.html',
  styleUrls: ['./AngularConcepts.component.css']
})
export class AngularConceptsComponent implements OnInit {

  //For String Interpolation
  mainTitle = 'Angular Concepts';
  task1 = 'String Interpolation';
  task2 = 'Property Binding'
  task3 = 'Event Binding'
  task4 = '*ngFor Directive';

  details={
    name: 'Jhon Doe',
    designation:'Data Scientist',
    address:{
      doorNo: 6626,
      city: 'Chennai',
      state:'TN'
    }
  }

  //for Property Binding
  isDisabledT = true;
  isDisabledF = false;

  //For Event Binding
  counter = 0;

  incrementCounter(){
    this.counter++;
  }

  decrementtCounter(){
    this.counter--;
  }

  //for *ngFor
  friendslist = [
    {
      id:1,
      name: 'Nishant',
      age: 25,
      city:'Chennai'
    },
    {
      id:2,
      name: 'Shailesh',
      age: 45,
      city:'Noida'
    },
    {
      id:3,
      name: 'Abhishek',
      age: 36,
      city:'Chennai',

    },
    {
      id:4,
      name: 'Akshay',
      age: 65,
      city:'Vizag'
    },
    {
      id:5,
      name: 'Ashish',
      age: 12,
      city:'Chennai'
    },
    {
      id:6,
      name: 'Uday',
      age: 31,
      city:'Pune'
    },
    {
      id:7,
      name: 'Mayank',
      age: 45,
      city:'Chennai'
    },
    {
      id:8,
      name: 'Raju',
      age: 74,
      city:'Cochin'
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
