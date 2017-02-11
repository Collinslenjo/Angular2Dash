import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule }   from '@angular/router';

import { AUTH_PROVIDERS } from 'angular2-jwt';

import { AuthGuard } from './common/auth.guard';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ActivityComponent } from './activity/activity.component';
import { SendMoneyComponent } from './send/send.component';
import { HomeComponent } from './home/home.component';
import { HelpComponent } from './help/help.component';
import { ContactsComponent } from './contacts/contacts.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { AccountComponent } from './account/account.component';
import { CustomerComponent } from './customer/customer.component';
import { GuideComponent } from './guide/guide.component';
import { GraphComponent } from './graph/graph.component';

import { routes } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    SidebarComponent,
    ActivityComponent,
    SendMoneyComponent,
    HomeComponent,
    HelpComponent,
    ContactsComponent,
    CalculatorComponent,
    AccountComponent,
    CustomerComponent,
    GuideComponent,
    GraphComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes, {
      useHash: true
    })
  ],
  providers: [
  AuthGuard, ...AUTH_PROVIDERS
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

