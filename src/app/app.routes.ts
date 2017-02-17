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
import { AuthGuard } from './common/auth.guard';

export const routes: Routes = [
  { path: '',  redirectTo: 'login', pathMatch: 'full' },
  {path: 'login',component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
  {path: 'send', component: SendMoneyComponent, canActivate: [AuthGuard]},
  {path: 'activity', component: ActivityComponent, canActivate: [AuthGuard]},
  {path: 'calculator', component: CalculatorComponent, canActivate: [AuthGuard]},
  {path: 'contacts', component: ContactsComponent, canActivate: [AuthGuard]},
  {path: 'customer', component: CustomerComponent, canActivate: [AuthGuard]},
  {path: 'terms', component: HelpComponent, canActivate: [AuthGuard]},
  {path: 'guide', component: GuideComponent, canActivate: [AuthGuard]}
];