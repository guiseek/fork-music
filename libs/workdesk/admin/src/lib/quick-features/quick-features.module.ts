import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { QuickFeaturesComponent } from './quick-features.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatGridListModule, MatMenuModule, MatIconModule, MatCardModule, MatButtonModule } from '@angular/material';
import { DynamicFormModule } from '@suite/common/forms/dynamic-form';
import { TableBackendModule } from '@suite/common/tables/table-backend';
import { CardsModule } from '@suite/common/cards';

import { FlexLayoutModule } from '@angular/flex-layout';
import { DragDropModule } from '@angular/cdk/drag-drop';

const modules = [
  LayoutModule,
  MatGridListModule,
  DragDropModule,
  MatMenuModule,
  MatIconModule,
  MatCardModule,
  MatButtonModule
]

const routes: Routes = [
  { path: '', component: QuickFeaturesComponent }
];

@NgModule({
  declarations: [QuickFeaturesComponent],
  imports: [
    CommonModule,
    DynamicFormModule,
    TableBackendModule,
    CardsModule,
    FlexLayoutModule,
    ...modules,
    RouterModule.forChild(routes)
  ]
})
export class QuickFeaturesModule { }
