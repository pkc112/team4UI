import { AuthGuardServiceService } from './auth-guard-service.service';
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
  {path: 'privatehome', component: PrivateHomeComponent, canActivate:[AuthGuardServiceService]},
  {path: 'public', component: HomeComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'profile', component: ProfileComponent, canActivate:[AuthGuardServiceService]},
  {path: 'addmoney', component: AddMoneyComponent, canActivate:[AuthGuardServiceService]},
  {path: 'funds', component: FundsComponent, canActivate:[AuthGuardServiceService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
