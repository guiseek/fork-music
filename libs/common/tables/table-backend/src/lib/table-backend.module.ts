import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { TableBackendComponent } from './table-backend.component';
import {
  MatTableModule
} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { CdkTableModule } from '@angular/cdk/table';

const modules = [
  MatPaginatorModule,
  MatSortModule,
  MatTableModule,
  CdkTableModule
]

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    ...modules
  ],
  declarations: [TableBackendComponent],
  exports: [TableBackendComponent]
})
export class TableBackendModule { }