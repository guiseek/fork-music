import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { AddressFormModule } from '@suite/common/forms/address-form';

import { AuthService } from './auth.service';
import { InComponent } from './forms/in.component';
import { UpComponent } from './forms/up.component';
import { AuthGuard } from './guards/auth.guard';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    AddressFormModule
  ],
  providers: [
    AuthService,
  ],
  declarations: [InComponent, UpComponent],
  exports: [InComponent, UpComponent]
})
export class AuthModule {}
