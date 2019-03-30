import { FundsComponent } from './funds/funds.component';
import { AddMoneyComponent } from './add-money/add-money.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrivateHomeComponent } from './private-home/private-home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path: '', redirectTo: 'privatehome', pathMatch: 'full'},
  {path: 'privatehome', component: PrivateHomeComponent},
  {path: 'public', component: HomeComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'addmoney', component: AddMoneyComponent},
  {path: 'funds', component: FundsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
