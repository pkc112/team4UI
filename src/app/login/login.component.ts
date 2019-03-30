import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
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
  @ViewChild('f') form: any;
  constructor(private routes: Router) { }
  model: UserLogin = new UserLogin();
  ngOnInit() {
  }

  onSubmit(){
    if (this.form.valid) {
      sessionStorage.setItem('isAuthenticated', 'true');
      this.routes.navigate(['privatehome'])
    }
  }

}
