import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesModule } from './services/services.module';
import { FlatFeeModule } from './flat-fee/flat-fee.module';
import { PackageModule } from './package/package.module';
import { WageComponent } from './forms/wage/wage.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule, MatIconModule, MatInputModule, MatButtonModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    ServicesModule,
    FlatFeeModule,
    PackageModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule
  ],
  declarations: [WageComponent],
  exports: [WageComponent]
})
export class BillingModule {}
