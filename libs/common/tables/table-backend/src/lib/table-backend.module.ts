import { NgModule } from '@angular/core';
import { CommonModule, DatePipe, CurrencyPipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { TableBackendComponent } from './table-backend.component';
import { TableBackendFormatCellPipe } from './table-backend-format-cell.pipe';
import {
  MatTableModule
} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { CdkTableModule } from '@angular/cdk/table';
import { MatButtonModule, MatIconModule, MatCheckboxModule } from '@angular/material';

const modules = [
  MatPaginatorModule,
  MatSortModule,
  MatTableModule,
  CdkTableModule,
  MatButtonModule,
  MatIconModule,
  MatCheckboxModule
]

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    ...modules
  ],
  declarations: [
    TableBackendComponent,
    TableBackendFormatCellPipe
  ],
  providers: [
    DatePipe,
    CurrencyPipe
  ],
  exports: [TableBackendComponent]
})
export class TableBackendModule { }
