import { CommonService } from './../common.service';

import { Router, CanActivate } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-private-home',
  templateUrl: './private-home.component.html',
  styleUrls: ['./private-home.component.css']
})
export class PrivateHomeComponent implements OnInit {

  schemes: any = [
  {
      "id": 1,
      "fundName": "Nand fund",
      "baseAmount": 1000,
      "depositeDueDate": "2019-03-30T00:00:00.000+0000",
      "biddingDate": "2019-03-30T00:00:00.000+0000",
      "biddingDuration": 10,
      "totalAmount": 20000
  },
  {
      "id": 2,
      "fundName": "Surya fund",
      "baseAmount": 1500,
      "depositeDueDate": "2019-03-30T00:00:00.000+0000",
      "biddingDate": "2019-03-30T00:00:00.000+0000",
      "biddingDuration": 10,
      "totalAmount": 30000
  },
  {
      "id": 3,
      "fundName": "Satish fund",
      "baseAmount": 2000,
      "depositeDueDate": "2019-03-30T00:00:00.000+0000",
      "biddingDate": "2019-03-30T00:00:00.000+0000",
      "biddingDuration": 10,
      "totalAmount": 50000
  }
];
  addToPortfolio(scheme) {
    console.log(scheme);
    
    this.router.navigate(['funds']);
  }


  constructor(private commonService: CommonService, public router: Router) { }

  ngOnInit() {
    
  }

}
