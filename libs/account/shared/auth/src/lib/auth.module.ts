import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './services/auth.service';
import { TokenService } from './services/token.service';
import { TokenInterceptor } from './interceptors/token.interceptor';
import { AUTH_CONFIG_TOKEN, AUTH_CONFIG } from './configs/auth.config';
import { JWT_CONFIG_TOKEN, JWT_CONFIG } from './configs/jwt.config';
import { AuthGuard } from './guards/auth.guard';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    AuthService,
    TokenService,
    AuthGuard
  ]
})
export class SharedAuthModule {
  static forRoot(
    options?: { api?: string }
  ): ModuleWithProviders {
    return {
      ngModule: SharedAuthModule,
      providers: [
        {
          provide: AUTH_CONFIG_TOKEN,
          useValue: {
            ...AUTH_CONFIG,
            api: options.api ? options.api : AUTH_CONFIG.api
          }
        },
        {
          provide: JWT_CONFIG_TOKEN,
          useValue: {
            ...JWT_CONFIG
          }
        },
        AuthService,
        TokenService,
        AuthGuard,
        TokenInterceptor,
        {
          provide: HTTP_INTERCEPTORS,
          useExisting: TokenInterceptor,
          multi: true
        }
      ]
    }
  }
}
