import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
name: string;
city: string;
pan: string;
pass: string;
phone: string;
upi:string;
fund: string;
  constructor() { }
  ngOnInit() {
    this.name = sessionStorage.getItem('userDetailsName');
    this.city = sessionStorage.getItem('userDetailsCity');
    this.pan = sessionStorage.getItem('userDetailsPan');
    this.phone = sessionStorage.getItem('userDetailsPhone');
    this.upi = sessionStorage.getItem('userDetailsUpi');
    this.fund = sessionStorage.getItem('fundBalance');
  }

}
