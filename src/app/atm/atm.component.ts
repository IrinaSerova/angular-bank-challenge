import { Component } from '@angular/core';
import { BankService } from '../bank.service';

@Component({
  selector: 'app-atm',
  templateUrl: './atm.component.html',
  styleUrls: ['./atm.component.css']
})
export class AtmComponent {
  balance: number;
  amount: number = 100;
  constructor(public bankService: BankService) { 
    console.log(bankService);
  }
  
  onGetBalance(){
    this.balance = this.bankService.getBalance();
  }
  onDeposit(){
    this.bankService.deposit(this.amount);
    this.balance = this.bankService.getBalance();
  }
  onWithdraw(){
    this.bankService.withdraw(this.amount);
    this.balance = this.bankService.getBalance();

  }
  onGetTransactions(){
    this.bankService.account.getTransactions();
  }
  // widthdrawlInfo = '';
  // widthdrawlButton(){
  //   this.widthdrawlInfo = '10';
  // }

}
