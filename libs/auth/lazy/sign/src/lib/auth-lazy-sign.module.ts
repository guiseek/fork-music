import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { LayoutModule } from '@angular/cdk/layout';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTabsModule } from '@angular/material/tabs';

import { SignShellComponent } from './sign-shell.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AuthModule } from '@suite/auth/shared/auth';
import { LockScreenComponent } from './lock-screen/lock-screen.component';
import { ConfirmationCodeComponent } from './confirmation-code/confirmation-code.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';

const components = [
  SignShellComponent, SignUpComponent, SignInComponent
];
const modules = [
  CommonModule,
  RouterModule,
  AuthModule,
  MatToolbarModule,
  MatIconModule,
  LayoutModule,
  MatButtonModule,
  MatSidenavModule,
  MatListModule,
  MatMenuModule,
  MatIconModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatTabsModule,
  MatSnackBarModule
];

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    ...modules,
    RouterModule.forChild([
      /* {path: '', pathMatch: 'full', component: InsertYourComponentHere} */
      {
        path: '',
        component: SignShellComponent,
        children: [
          {
            path: '',
            pathMatch: 'full',
            redirectTo: 'in'
          },
          {
            path: 'in',
            component: SignInComponent,
            data: { animation: 'SignIn' }
          },
          {
            path: 'up',
            component: SignUpComponent,
            data: { animation: 'SignUp' }
          },
          {
            path: 'confirm/:code',
            component: ConfirmationCodeComponent,
            data: { animation: 'SignUp' }
          },
          {
            path: 'forgot',
            component: ForgotPasswordComponent,
            data: { animation: 'SignUp' }
          },
          {
            path: 'lock',
            component: LockScreenComponent,
            data: { animation: 'SignUp' }
          }
        ]
      }
    ])
  ],
  declarations: [
    ...components,
    LockScreenComponent,
    ConfirmationCodeComponent,
    ForgotPasswordComponent
  ]
})
export class AuthLazySignModule {}
