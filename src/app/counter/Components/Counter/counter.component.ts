import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
  <h3 class="font-bold">Counter: {{counter}}</h3>
  <div class="flex">
    <button class="w-full rounded-md bg-green-500 mr-3 p-2" (click)="increaseBy(+1)">+1</button>
    <button class="w-full rounded-md bg-blue-500 mr-3 p-2" (click)="reset()">reset</button>
    <button class="w-full rounded-md bg-red-500 mr-3 p-2" (click)="increaseBy(-1)">-1</button>
  </div>
  `
})

export class CounterComponent {
  public counter: number = 10;

  increaseBy( value: number ):void{
    this.counter += value;
  }

  reset():void{
    this.counter = 10;
  }
}