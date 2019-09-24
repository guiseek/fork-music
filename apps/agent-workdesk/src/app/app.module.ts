import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import {
  ProfileSettingsUiModule,
  profileSettingsUiRoutes
} from '@suite/profile-settings-ui';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthInterceptor, AuthGuard, AuthService } from '@suite/auth/shared/auth';
import { CoreModule } from '@suite/common/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CoreModule,
    HttpClientModule,
    RouterModule.forRoot(
      [
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
            import('@suite/dashboard').then(module => module.DashboardModule),
          canLoad: [AuthGuard]
        },
        {
          path: 'conta',
          loadChildren: () =>
            import('@suite/account-ui').then(module => module.AccountUiModule)
        },
        {
          path: 'admin',
          loadChildren: () =>
            import('@suite/workdesk/admin').then(
              module => module.WorkdeskAdminModule
            ),
          canLoad: [AuthGuard]
        },
        {
          path: 'workdesk-teacher',
          loadChildren: () =>
            import('@suite/workdesk/teacher').then(
              module => module.WorkdeskTeacherModule
            )
        },
        { path: '', pathMatch: 'full', redirectTo: 'admin' }
      ],
      { initialNavigation: 'enabled' }
    ),
    ProfileSettingsUiModule,
    BrowserAnimationsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    // AuthService,
    // { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
