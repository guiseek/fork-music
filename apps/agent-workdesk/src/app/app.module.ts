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

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      [
        { path: 'profile-settings-ui', children: profileSettingsUiRoutes },
        {
          path: 'ticket-list-ui',
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
        { path: '', pathMatch: 'full', redirectTo: 'auth' }
      ],
      { initialNavigation: 'enabled' }
    ),
    ProfileSettingsUiModule,
    BrowserAnimationsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
