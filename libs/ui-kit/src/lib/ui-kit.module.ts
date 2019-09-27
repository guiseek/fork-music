import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { SetupSteps } from './setup-steps/setup-steps.component';
import { DialogFormComponent } from './dialog-form/dialog-form.component';
import { DialogModule } from '@suite/cdk/dialog';
import { DynamicFormModule } from '@suite/common/forms/dynamic-form';

@NgModule({
  imports: [
    CommonModule,
    CdkStepperModule,
    DialogModule,
    DynamicFormModule
  ],
  declarations: [SetupSteps, DialogFormComponent],
  exports: [SetupSteps, DialogFormComponent],
  entryComponents: [DialogFormComponent]
})
export class UiKitModule {}
