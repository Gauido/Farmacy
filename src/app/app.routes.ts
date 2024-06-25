import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PersonComponent } from './pages/person/person.component';
import { ErrorComponent } from './pages/error/error.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      { path: '', redirectTo: 'person', pathMatch: 'full' },
      {
        path: 'person',
        component: PersonComponent,
        children: [
          {
            path: 'create',
            component: ErrorComponent,
          },
        ],
      },
    ],
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
];
