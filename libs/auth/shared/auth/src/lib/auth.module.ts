import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AddressFormModule } from '@suite/common/forms/address-form';

import { AuthService } from './auth.service';
import { InComponent } from './forms/in.component';
import { UpComponent } from './forms/up.component';
import { AuthGuard } from './guards/auth.guard';
import { ConfirmationCodeComponent } from './confirmation-code/confirmation-code.component';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
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
  declarations: [InComponent, UpComponent, ConfirmationCodeComponent],
  exports: [InComponent, UpComponent, ConfirmationCodeComponent],
  entryComponents: [ConfirmationCodeComponent]
})
export class AuthModule {}
