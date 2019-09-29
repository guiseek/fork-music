import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeBr from '@angular/common/locales/pt';
import localeBrExtra from '@angular/common/locales/extra/br';
import { CoreModule } from '@suite/common/core';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { AuthGuard } from '@suite/auth/shared/auth';

registerLocaleData(localeBr, 'pt-BR', localeBrExtra);

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
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
        {
          path: 'auth',
          loadChildren: () =>
            import('@suite/auth/lazy/sign').then(
              module => module.AuthLazySignModule
            )
        },
        { path: '', pathMatch: 'full', redirectTo: 'conta' }
      ],
      { initialNavigation: 'enabled' }
    )
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt-BR' },
  ],

  bootstrap: [AppComponent]
})
export class AppModule {}
