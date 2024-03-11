import { bootstrapApplication } from '@angular/platform-browser';
import { config } from './app.config.server';
import { LoginScreenComponent } from './login-screen/login-screen.component';

const loginBootstrap = () => bootstrapApplication(LoginScreenComponent, config);

export default loginBootstrap;
