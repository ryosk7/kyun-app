import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  isPushed: boolean = false;
  count: number = 0;

  constructor() {}

  setCountUp(): number {
    this.isPushed = true;
    this.count = this.count + 1;
    return this.count;
  }
}
