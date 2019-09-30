import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InComponent } from './in/in.component';
import { DynamicFormModule } from '@suite/common/forms/dynamic-form';
import { FormBackendModule } from '@suite/common/forms/form-backend';
import { UpComponent } from './up/up.component';
import { ConfirmComponent } from './confirm/confirm.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material';

@NgModule({
  declarations: [InComponent, UpComponent, ConfirmComponent],
  imports: [
    CommonModule,
    DynamicFormModule,
    FormBackendModule,
    FlexLayoutModule,
    MatCardModule
  ],
  exports: [InComponent, UpComponent, ConfirmComponent],
  entryComponents: [InComponent, UpComponent, ConfirmComponent]
})
export class SharedAccountAuthModule { }
