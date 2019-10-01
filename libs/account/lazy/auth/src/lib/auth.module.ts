import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthLayoutComponent } from './auth-layout.component';
import { SharedMaterialFormModule } from '@suite/ui-kit';
import { MatStepperModule, MatButtonModule, MatCardModule, MatIconModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormBackendModule } from '@suite/common/forms/form-backend';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    FormBackendModule,
    MatStepperModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    SharedMaterialFormModule,
    RouterModule.forChild([
      /* {path: '', pathMatch: 'full', component: InsertYourComponentHere} */
      { path: '', component: AuthLayoutComponent }
    ])
  ],
  declarations: [AuthLayoutComponent]
})
export class AuthModule {}
