import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthLayoutComponent } from './auth-layout.component';
import { SharedMaterialFormModule } from '@suite/ui-kit';
import { MatButtonModule, MatCardModule, MatIconModule, MatMenuModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormBackendModule } from '@suite/common/forms/form-backend';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
// import { SharedAccountAuthModule } from '@suite/account/shared/account';
import { SharedAuthModule } from '@suite/account/shared/auth';
import { environment } from '@env/customer/environment';
import { SharedAccountModule } from '@suite/account/shared/account';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    FormBackendModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    SharedAuthModule,
    SharedAccountModule,
    // SharedAccountAuthModule,
    SharedAuthModule.forRoot({
      api: environment.api
    }),
    SharedMaterialFormModule,
    RouterModule.forChild([
      /* {path: '', pathMatch: 'full', component: InsertYourComponentHere} */
      {
        path: '', component: AuthLayoutComponent, children: [
          // {
          //   path: '', redirectTo: 'acessar-conta'
          // },
          {
            path: '', component: LoginComponent
          }, {
            path: 'criar-conta', component: RegisterComponent
          }]
      }
    ])
  ],
  declarations: [AuthLayoutComponent, LoginComponent, RegisterComponent]
})
export class AuthModule { }
