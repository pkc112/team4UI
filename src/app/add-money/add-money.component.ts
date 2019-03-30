import { Component, OnInit, ViewChild } from '@angular/core';
import { modelGroupProvider } from '@angular/forms/src/directives/ng_model_group';
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
  }
  onSubmit() {
    if (this.form.valid) {
      sessionStorage.setItem('fundBalance', this.form.value.amount);
      this.form.reset();
      this.model.language = this.language[0];
    }
  }

}
