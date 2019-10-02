import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeBr from '@angular/common/locales/pt';
import localeBrExtra from '@angular/common/locales/extra/br';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { AuthInterceptor, AuthGuard, AuthService } from '@suite/auth/shared/auth';
import { CoreModule } from '@suite/common/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { SharedAuthModule, AuthGuard } from '@suite/account/shared/auth';
import { environment } from '../environments/environment';

registerLocaleData(localeBr, 'pt-BR', localeBrExtra);

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CoreModule,
    SharedAuthModule.forRoot({
      api: environment.api
    }),
    HttpClientModule,
    RouterModule.forRoot(
      [
        { path: '', pathMatch: 'full', redirectTo: 'admin' },
        {
          path: 'auth',
          loadChildren: () =>
            import('@suite/account/lazy/auth').then(module => module.AuthModule)
        },
        // {
        //   path: 'auth',
        //   loadChildren: () =>
        //     import('@suite/auth/lazy/sign').then(
        //       module => module.AuthLazySignModule
        //     )
        // },
        {
          path: 'dashboard',
          loadChildren: () =>
            import('@suite/dashboard').then(module => module.DashboardModule),
          canLoad: [AuthGuard]
        },
        {
          path: 'conta',
          loadChildren: () =>
            import('@suite/account/lazy/account').then(
              module => module.AccountModule
            ),
          canLoad: [AuthGuard]
        },
        // {
        //   path: 'conta',
        //   loadChildren: () =>
        //     import('@suite/account-ui').then(module => module.AccountUiModule)
        // },
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
        }
      ],
      { initialNavigation: 'enabled' }
    ),
    BrowserAnimationsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt-BR' },
    // AuthService,
    // { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
