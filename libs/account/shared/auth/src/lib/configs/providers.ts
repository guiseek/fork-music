import { Provider } from '@angular/core';
import { JWT_CONFIG_TOKEN, JWT_CONFIG } from './jwt.config';
import { AUTH_CONFIG_TOKEN, AUTH_CONFIG } from './auth.config';

export const AUTH_PROVIDERS: Provider[] = [{
  provide: JWT_CONFIG_TOKEN,
  useValue: JWT_CONFIG
}, {
  provide: AUTH_CONFIG_TOKEN,
  useValue: AUTH_CONFIG
}]