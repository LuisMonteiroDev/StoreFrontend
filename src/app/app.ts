import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app.config';
import { LoginScreenComponent } from './login-screen/login-screen.component';

bootstrapApplication(LoginScreenComponent, appConfig)
  .catch((err) => console.error(err));
