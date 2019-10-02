import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeBr from '@angular/common/locales/pt';
import localeBrExtra from '@angular/common/locales/extra/br';
import { CoreModule } from '@suite/common/core';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
// import { AuthGuard } from '@suite/auth/shared/auth';
import {
  AccountGuard,
  SharedAccountAuthModule,
  UpComponent,
  ConfirmComponent
} from '@suite/account/shared/account';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { TokenInterceptor, AuthGuard, SharedAuthModule } from '@suite/account/shared/auth';
// import { AuthInterceptor } from '@suite/auth/shared/auth';
// import { InComponent } from '@suite/account/shared/account';
// import {
//   createUserAccountForm,
//   createSoftwareForm,
//   createSoftwareFormBackend,
//   createUserAccountFormBackend,
//   loginUserAccountForm,
//   createUserAccountPage
// } from '@suite/account/shared/resources';

registerLocaleData(localeBr, 'pt-BR', localeBrExtra);

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    SharedAccountAuthModule,
    SharedAuthModule,
    HttpClientModule,
    RouterModule.forRoot(
      [
        {
          path: 'conta',
          loadChildren: () =>
            import('@suite/account/lazy/account').then(
              module => module.AccountModule
            ),
          canLoad: [AuthGuard]
        },
        // // {
        // //   path: 'auth',
        // //   loadChildren: () =>
        // //     import('@suite/auth/lazy/sign').then(
        // //       module => module.AuthLazySignModule
        // //     )
        // // },
        // {
        //   path: 'up',
        //   component: UpComponent,
        //   data: {
        //     resource: createUserAccountPage
        //   }
        // },
        // {
        //   path: 'in',
        //   component: InComponent,
        //   data: {
        //     resource: loginUserAccountForm
        //   }
        // },
        // {
        //   path: 'confirm/:code',
        //   component: ConfirmComponent,
        //   data: {
        //     resource: createUserAccountFormBackend
        //   }
        // },
        {
          path: 'auth',
          loadChildren: () =>
            import('@suite/account/lazy/auth').then(module => module.AuthModule)
        },
        // {
        //   path: 'software',
        //   component: InComponent,
        //   data: {
        //     resource: createSoftwareFormBackend
        //   }
        // },
        { path: '', pathMatch: 'full', redirectTo: 'conta' },
      ],
      { initialNavigation: 'enabled' }
    )
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt-BR' },
    { provide: HTTP_INTERCEPTORS, multi: true, useClass: TokenInterceptor }
  ],

  bootstrap: [AppComponent]
})
export class AppModule {}
