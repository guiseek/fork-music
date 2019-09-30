import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBackendComponent } from './form-backend.component';
import { DynamicFormModule } from '@suite/common/forms/dynamic-form';
import { MatSnackBarModule, MatFormFieldModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    DynamicFormModule,
    MatSnackBarModule,
    MatFormFieldModule
  ],
  declarations: [FormBackendComponent],
  exports: [FormBackendComponent],
  entryComponents: [FormBackendComponent]
})
export class FormBackendModule {}
