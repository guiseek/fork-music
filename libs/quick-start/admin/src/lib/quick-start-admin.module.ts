import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { QuickStepComponent } from './quick-step/quick-step.component';
import { LayoutModule } from '@angular/cdk/layout';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DynamicFormModule } from '@suite/common/forms/dynamic-form';
import { UiKitModule } from '@suite/ui-kit';

import {
  MatGridListModule,
  MatMenuModule,
  MatIconModule,
  MatCardModule,
  MatButtonModule,
  MatSidenavModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatDialogModule,
  MatProgressSpinnerModule,
  MatFormFieldModule,
  MatInputModule,
  MatToolbarModule,
  MatSnackBarModule,
  MatListModule,
  MatStepperModule
} from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { QuickNavComponent } from './quick-nav.component';
import { DialogModule } from '@suite/cdk/dialog';
import { TableBackendModule } from '@suite/common/tables/table-backend';
import { CdkStepperModule } from '@angular/cdk/stepper';

const modules = [
  LayoutModule,
  CdkStepperModule,
  MatToolbarModule,
  MatGridListModule,
  MatSidenavModule,
  MatFormFieldModule,
  MatInputModule,
  MatMenuModule,
  MatIconModule,
  MatCardModule,
  MatButtonModule,
  MatDialogModule,
  MatListModule,
  MatTableModule,
  MatSnackBarModule,
  MatPaginatorModule,
  MatSortModule,
  MatStepperModule,
  MatProgressSpinnerModule,
  FlexLayoutModule
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    UiKitModule,
    DynamicFormModule,
    DialogModule,
    TableBackendModule,
    ...modules,
    RouterModule.forChild([
      /* {path: '', pathMatch: 'full', component: InsertYourComponentHere} */
      { path: '', component: QuickNavComponent, children: [
        { path: '/:step', component: QuickStepComponent }
      ] }
    ])
  ],
  declarations: [
    QuickNavComponent,
    QuickStepComponent
  ]
})
export class QuickStartAdminModule {}
