import { Component, OnInit } from '@angular/core';
class UserLogin {
  constructor(public username: string = '',
              public password: string = '') {
  }
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }
  model: UserLogin = new UserLogin();
  ngOnInit() {
  }

}
