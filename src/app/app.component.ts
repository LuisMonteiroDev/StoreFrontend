import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginScreenComponent } from './components/login-screen/login-screen.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LoginScreenComponent],
  templateUrl: './app.component.html',
  // template: '<h1>Hello World</h1>',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'store-frontend';
}
