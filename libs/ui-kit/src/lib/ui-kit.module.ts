import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { SetupSteps } from './setup-steps/setup-steps.component';

@NgModule({
  imports: [
    CommonModule,
    CdkStepperModule
  ],
  declarations: [SetupSteps],
  exports: [SetupSteps]
})
export class UiKitModule {}
