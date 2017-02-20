import { Routes } from '@angular/router';
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

export const routes: Routes = [
  {path: 'login',component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'send', component: SendMoneyComponent},
  {path: 'activity', component: ActivityComponent},
  {path: 'calculator', component: CalculatorComponent},
  {path: 'contacts', component: ContactsComponent},
  {path: 'customer', component: CustomerComponent},
  {path: 'terms', component: HelpComponent},
  {path: 'guide', component: GuideComponent},
  {path: '**', component: LoginComponent}
];