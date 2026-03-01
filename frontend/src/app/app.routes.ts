import { Routes } from '@angular/router';
import { UserRegistration } from './component/user-registration/user-registration';
import { Login } from './component/login/login';

export const routes: Routes = [
    {path: 'registration', component: UserRegistration, title: 'registrar'},
    {path: 'login', component: Login, title: 'login'}
];
