import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeBr from '@angular/common/locales/pt';
import localeBrExtra from '@angular/common/locales/extra/br';
import { CoreModule } from '@suite/common/core';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AuthGuard, SharedAuthModule } from '@suite/account/shared/auth';
import { environment } from '@env/customer/environment';

registerLocaleData(localeBr, 'pt-BR', localeBrExtra);

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CoreModule,
    // SharedAccountAuthModule,
    SharedAuthModule.forRoot({
      api: environment.api
    }),
    HttpClientModule,
    RouterModule.forRoot(
      [
        { path: '', pathMatch: 'full', redirectTo: 'conta' },
        {
          path: 'conta',
          loadChildren: () =>
            import('@suite/account/lazy/account').then(
              module => module.AccountModule
            ),
          canLoad: [AuthGuard]
        },
        {
          path: 'auth',
          loadChildren: () =>
            import('@suite/account/lazy/auth').then(module => module.AuthModule)
        }
        // {
        //   path: 'software',
        //   component: InComponent,
        //   data: {
        //     resource: createSoftwareFormBackend
        //   }
        // },
      ],
      { initialNavigation: 'enabled' }
    ),
    BrowserAnimationsModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt-BR' }
    // { provide: HTTP_INTERCEPTORS, multi: true, useClass: TokenInterceptor }
  ],

  bootstrap: [AppComponent]
})
export class AppModule {}
