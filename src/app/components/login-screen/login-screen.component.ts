import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-login-screen',
  standalone: true,
  imports: [RouterOutlet, HomeComponent],
  templateUrl: './login-screen.component.html',
  styleUrl: './login-screen.component.scss'
})
export class LoginScreenComponent {
 
}
