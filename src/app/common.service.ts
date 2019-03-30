
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http: HttpClient) { }

  getFunds(){
    return this.http.get('http://192.168.4.174:8080/DbsChitFund/allFunds');
  }
  getBids(amount){
    return this.http.post('http://192.168.4.174:8080/DbsChitFund/allFunds',
    {
    "userID": 1,
    "fundID": 1,
    "biddingAmount": amount
    });
  }
}
