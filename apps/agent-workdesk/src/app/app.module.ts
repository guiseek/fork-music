import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import {
  ProfileSettingsUiModule,
  profileSettingsUiRoutes
} from '@suite/profile-settings-ui';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from '@suite/auth/shared/auth';
import { CoreModule } from '@suite/common/core';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CoreModule,
    RouterModule.forRoot(
      [
        { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
        { path: 'profile-settings-ui', children: profileSettingsUiRoutes },
        {
          path: 'ticket-list',
          loadChildren: () =>
            import('@suite/ticket-list-ui').then(
              module => module.TicketListUiModule
            )
        },
        {
          path: 'auth',
          loadChildren: () =>
            import('@suite/auth/lazy/sign').then(
              module => module.AuthLazySignModule
            )
        },
        {
          path: 'dashboard',
          loadChildren: () =>
            import('@suite/dashboard').then(module => module.DashboardModule)
        }, {
          path: 'conta',
          loadChildren: () =>
            import('@suite/account-ui').then(module => module.AccountUiModule)
        }
      ],
      { initialNavigation: 'enabled' }
    ),
    ProfileSettingsUiModule,
    BrowserAnimationsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor }],
  bootstrap: [AppComponent]
})
export class AppModule { }
