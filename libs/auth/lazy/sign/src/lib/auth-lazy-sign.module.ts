import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { SignShellComponent } from './sign-shell.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      /* {path: '', pathMatch: 'full', component: InsertYourComponentHere} */
      {
        path: '',
        component: SignShellComponent,
        children: [
          {
            path: '',
            pathMatch: 'full',
            redirectTo: 'signin'
          },
          {
            path: 'signin',
            component: SignInComponent
          },
          {
            path: 'signup',
            component: SignUpComponent
          }
        ]
      }
    ])
  ],
  declarations: [SignShellComponent, SignInComponent, SignUpComponent]
})
export class AuthLazySignModule {}
