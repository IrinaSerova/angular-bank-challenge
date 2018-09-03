import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BankService {
  bankService = "TEST";
  bankName = 'Bank of San Diego';
  account: any = {
    fname: 'first name',
    lname: 'last name',
    age: 0,
    address: {
      street: '1234 street st',
      city: 'city',
      state: 'state',
      zip: 12345,
      country: 'canada'
    },
    balance: 0.01,
    currency: 'usd',
    transactions: [
      {
        date: '01-01-01',
        type: 'withdrawal',
        amount: 200.00,
        currency: 'usd'
      },
      {
        date: '02-02-02',
        type: 'deposit',
        amount: 100.00,
        currency: 'usd'
      },
      {
        date: '03-03-03',
        type: 'withdrawal',
        amount: 2.00,
        currency: 'usd'
      }
    ]
  };
  getBalance(){
    return this.account.balance;
  }
  
  withdraw(amount){
    
    this.account.balance -= amount;
    
  }
  deposit(amount){
    this.account.balance += amount;
    
  }
  getTransactions(){
    return this.account.transactions;
    
  }
  
 isShow: boolean  = true;
  show(){
   this.isShow =  !this.isShow;
 }

  constructor() { }
}
