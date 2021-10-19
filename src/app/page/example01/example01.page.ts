import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example01',
  templateUrl: './example01.page.html',
  styleUrls: ['./example01.page.scss'],
})
export class Example01Page implements OnInit {

  x: number;
  y: number;
  animal: string;
  person: object;
  today: Date = new Date();


  constructor() { }

  ngOnInit() {
    this.x = 13;
    this.y = 30;
    this.animal = "cat";
    this.person = {
      name: "Gonzlo",
      age: 19,
      salary: 1000
    };

  }

}
