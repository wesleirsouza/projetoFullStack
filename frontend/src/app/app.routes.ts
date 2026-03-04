import { Routes } from '@angular/router';
import { UserRegistration } from './component/user-registration/user-registration';
import { Login } from './component/login/login';
import { HomePage } from './component/home-page/home-page';
import { Feed } from './component/feed/feed';
import { AuthGuard } from './guards/auth-guard';

export const routes: Routes = [
    {path: 'registration', component: UserRegistration, title: 'registrar'},
    {path: 'login', component: Login, title: 'login'},
    {path: 'homepage', component: HomePage, title: 'pagina inicial'},
    {path: 'feed', component: Feed, title: 'feed noticias', canActivate: [AuthGuard]}
];
