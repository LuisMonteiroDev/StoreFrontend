import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginScreenComponent } from './components/login-screen/login-screen.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';


export const routes: Routes = [
    { path: '', component: LoginScreenComponent },
    { path: 'home/', component: HomeComponent },
    { path: 'forgot-password/', component: ForgotPasswordComponent },
];
