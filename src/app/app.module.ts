import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PublicNavComponent } from './public-nav/public-nav.component';
import { PrivateNavComponent } from './private-nav/private-nav.component';
import { HomeComponent } from './home/home.component';
import { PrivateHomeComponent } from './private-home/private-home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { AddMoneyComponent } from './add-money/add-money.component';
import { FundsComponent } from './funds/funds.component';

@NgModule({
  declarations: [
    AppComponent,
    PublicNavComponent,
    PrivateNavComponent,
    HomeComponent,
    PrivateHomeComponent,
    RegisterComponent,
    LoginComponent,
    ProfileComponent,
    AddMoneyComponent,
    FundsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
