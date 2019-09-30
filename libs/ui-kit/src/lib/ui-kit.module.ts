import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { SetupSteps } from './setup-steps/setup-steps.component';
import { DialogFormComponent } from './dialog-form/dialog-form.component';
import { DialogModule } from '@suite/cdk/dialog';
import { DynamicFormModule } from '@suite/common/forms/dynamic-form';
import { TableBackendModule } from '@suite/common/tables/table-backend';

import { DialogTableBackendComponent } from './dialog-table-backend/dialog-table-backend.component';
import { EmptyComponent } from './empty/empty.component';

@NgModule({
  imports: [
    CommonModule,
    CdkStepperModule,
    DialogModule,
    TableBackendModule,
    DynamicFormModule
  ],
  declarations: [SetupSteps, DialogFormComponent, DialogTableBackendComponent, EmptyComponent],
  exports: [SetupSteps, DialogFormComponent, DialogTableBackendComponent, EmptyComponent],
  entryComponents: [DialogFormComponent, DialogTableBackendComponent]
})
export class UiKitModule {}
