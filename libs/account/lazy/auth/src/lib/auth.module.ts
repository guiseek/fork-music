import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthLayoutComponent } from './auth-layout.component';
import { SharedMaterialFormModule, UiKitModule } from '@suite/ui-kit';
import { MatButtonModule, MatCardModule, MatIconModule, MatMenuModule, MatDividerModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SharedAuthModule } from '@suite/account/shared/auth';
import { environment } from '@env/customer/environment';
import { SharedAccountModule } from '@suite/account/shared/account';
import { DialogModule } from '@suite/cdk/dialog';

const modules = [
  MatCardModule,
  MatMenuModule,
  MatIconModule,
  MatButtonModule,
  MatDividerModule
]

@NgModule({
  declarations: [
    AuthLayoutComponent,
    RegisterComponent,
    LoginComponent,
  ],
  imports: [
    CommonModule,
    // SharedAuthModule,
    // SharedAuthModule.forRoot({
    //   api: environment.api
    // }),
    ReactiveFormsModule,
    SharedAccountModule,
    UiKitModule,
    DialogModule,
    SharedMaterialFormModule,
    FlexLayoutModule,
    ...modules,
    RouterModule.forChild([
      {
        path: '', component: AuthLayoutComponent, children: [
          {
            path: '', component: LoginComponent
          }, {
            path: 'criar-conta', component: RegisterComponent
          }]
      }
    ])
  ]
})
export class AuthModule { }
