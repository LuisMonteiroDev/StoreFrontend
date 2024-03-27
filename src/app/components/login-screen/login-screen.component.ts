import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-login-screen',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './login-screen.component.html',
  styleUrl: './login-screen.component.scss'
})
export class LoginScreenComponent {
  constructor(private router: Router) {}

  redirectForgotPassword() {
    this.router.navigate(['/forgot-password']);
  }
}
