import { CommonService } from './../common.service';

import { Router, CanActivate } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-private-home',
  templateUrl: './private-home.component.html',
  styleUrls: ['./private-home.component.css']
})
export class PrivateHomeComponent implements OnInit {

  schemes: any = [{ "id": 1, "fundName": "New Life Fund", "baseAmount": 1000.0, "depositeDueDate": "2019-03-29T18:30:00.000+0000", "biddingDate": "2019-03-29T18:30:00.000+0000", "biddingDuration": 10, "totalAmount": 20000.0 },
  { "id": 2, "fundName": "Basic India Fund", "baseAmount": 10000.0, "depositeDueDate": "2019-03-29T18:30:00.000+0000", "biddingDate": "2019-03-29T18:30:00.000+0000", "biddingDuration": 10, "totalAmount": 20000.0 },
  { "id": 3, "fundName": "PAn India Fund", "baseAmount": 1000.0, "depositeDueDate": "2019-03-29T18:30:00.000+0000", "biddingDate": "2019-03-29T18:30:00.000+0000", "biddingDuration": 10, "totalAmount": 20000.0 }];

  addToPortfolio(scheme) {
    console.log(scheme);
    this.router.navigate(['funds']);
  }


  constructor(private commonService: CommonService, public router: Router) { }

  ngOnInit() {
    /* this.commonService.getFunds().toPromise().then((resp) => {
      console.log(resp);
    }, () => {}); */
  }

}
