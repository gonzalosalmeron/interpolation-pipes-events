import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-random-number-component',
  templateUrl: './random-number-component.component.html',
  styleUrls: ['./random-number-component.component.scss'],
})
export class RandomNumberComponentComponent implements OnInit {

  @Input()
  min: number;

  @Input()
  max: number;

  n: number;

  constructor() { }

  ngOnInit() {
    this.n = this.randomNumber(this.min, this.max);
  }
  randomNumber(min: number, max: number ): number {
    return Math.floor(Math.random()*((max - min) + 1) + min);
  }

}
