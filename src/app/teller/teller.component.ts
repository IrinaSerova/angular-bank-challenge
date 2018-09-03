import { Component } from '@angular/core';

import { BankService } from '../bank.service';

@Component({
  selector: 'app-teller',
  templateUrl: './teller.component.html',
  styleUrls: ['./teller.component.css']
})
export class TellerComponent {
  amount: number = 100;
  balance: number;

  constructor(public bankService: BankService) { 
    console.log(bankService);
  }
   onDeposit(){
    this.bankService.deposit(this.amount);
    this.balance = this.bankService.getBalance();
  }
  onWithdraw(){
    this.bankService.withdraw(this.amount);
    this.balance = this.bankService.getBalance();

  }
  isShow: boolean  = false;
  show(){
   this.isShow =  !this.isShow 
 }

}
