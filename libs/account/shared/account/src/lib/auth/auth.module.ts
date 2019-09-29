import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InComponent } from './in/in.component';
import { DynamicFormModule } from '@suite/common/forms/dynamic-form';



@NgModule({
  declarations: [InComponent],
  imports: [
    CommonModule,
    DynamicFormModule
  ],
  exports: [InComponent]
})
export class SharedAccountAuthModule { }
