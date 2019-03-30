import { CommonService } from './../common.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';

import { debounceTime } from 'rxjs/operators';
class AddMoney {
  constructor(public amount: string = '') {
  }
}

@Component({
  selector: 'app-funds',
  templateUrl: './funds.component.html',
  styleUrls: ['./funds.component.css']
})
export class FundsComponent implements OnInit {

  private _success = new Subject<string>();
  private _fail = new Subject<string>();

  staticAlertClosed = false;
  successMessage: string;
  fail: string;
  model: AddMoney = new AddMoney();
  @ViewChild('f') form: any;
  constructor(private ser: CommonService) { }

  currentBid = 0;
  language: string[] = [
    'Card',
    'Upi',
    'Net Banking'
  ];

  ngOnInit() {
    setTimeout(() => this.staticAlertClosed = true, 20000);

    this._success.subscribe((message) => this.successMessage = message);
    this._success.pipe(
      debounceTime(5000)
    ).subscribe(() => this.successMessage = null);
    this._fail.subscribe((message) => this.fail = message);
    this._success.pipe(
      debounceTime(5000)
    ).subscribe(() => this.fail = null);
    this.currentBid = 0;
    setInterval(() =>{
      let enc = Math.floor((Math.random() * 100));
      this.currentBid = this.currentBid + enc;
    }, 5000);
  }
  onSubmit() {
    if (this.form.valid) {
      if(this.form.value.amount > this.currentBid){
      this._success.next(`Bid Of Amount ${this.form.value.amount} made successfully`);
    }else{
      this._fail.next(`Bid Of Amount ${this.form.value.amount} was unsuccessful please raise bid amount`);
    }
    
    this.ser.getBids(this.form.value.amount).subscribe(function(resp){
      console.log(resp)
    })


    }
  }
}
