import {Router} from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';

class UserRegister {
  constructor(public name: string = '',
              public upi: string = '', public city: string = '',
              public pan: string = '',public password: string = '',public phone: string = '',) {
  }
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @ViewChild('f') form: any;
  constructor(private router: Router) { }

  model: UserRegister = new UserRegister();

  ngOnInit() {
  }

  onSubmit() {
    if (this.form.valid) {
      sessionStorage.setItem('userDetails', this.form.value.stringify());
      this.form.reset();
      this.router.navigate(['/profile']);
    }
    
  }

}
