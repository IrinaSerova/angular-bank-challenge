import { Component } from '@angular/core';

@Component({
  selector: 'app-atm',
  templateUrl: './atm.component.html',
  styleUrls: ['./atm.component.css']
})
export class AtmComponent {

  constructor() { }
  widthdrawlInfo = '';
  widthdrawlButton(){
    this.widthdrawlInfo = '10';
  }

}
