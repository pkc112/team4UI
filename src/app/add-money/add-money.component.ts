import { Component, OnInit, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';

import { debounceTime } from 'rxjs/operators';
class AddMoney {
  constructor(public amount: string = '',
              public language: string = '') {
  }
}

@Component({
  selector: 'app-add-money',
  templateUrl: './add-money.component.html',
  styleUrls: ['./add-money.component.css']
})
export class AddMoneyComponent implements OnInit {
  private _success = new Subject<string>();

  staticAlertClosed = false;
  successMessage: string;
  model: AddMoney = new AddMoney();
  @ViewChild('f') form: any;
  constructor() { }


  language: string[] = [
    'Card',
    'Upi',
    'Net Banking'
  ];

  ngOnInit() {
    this.model.language = this.language[0];
    setTimeout(() => this.staticAlertClosed = true, 20000);

    this._success.subscribe((message) => this.successMessage = message);
    this._success.pipe(
      debounceTime(5000)
    ).subscribe(() => this.successMessage = null);
  }
  onSubmit() {
    if (this.form.valid) {
      sessionStorage.setItem('fundBalance', this.form.value.amount);
      this._success.next(`${this.form.value.amount} successfully added to your account ${new Date()}`);
      this.form.reset();
      this.model.language = this.language[0];
    }
  }

}
