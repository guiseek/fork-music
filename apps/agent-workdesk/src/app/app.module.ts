import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { LazyElementsModule } from '@angular-extensions/elements';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import {
  ProfileSettingsUiModule,
  profileSettingsUiRoutes
} from '@suite/profile-settings-ui';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    LazyElementsModule,
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
          path: 'auth-lazy-sign',
          loadChildren: () =>
            import('@suite/auth/lazy/sign').then(
              module => module.AuthLazySignModule
            )
        }
      ],
      { initialNavigation: 'enabled' }
    ),
    ProfileSettingsUiModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
