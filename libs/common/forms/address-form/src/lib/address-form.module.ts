import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StateFormComponent } from './state-form/state-form.component';
import { CityFormComponent } from './city-form/city-form.component';
import { ZipcodeFormComponent } from './zipcode-form/zipcode-form.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

const modules = [
  CommonModule,
  MatIconModule,
  MatButtonModule,
  MatIconModule,
  MatFormFieldModule,
  MatInputModule,
  MatAutocompleteModule
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    ...modules
  ],
  declarations: [
    StateFormComponent,
    CityFormComponent,
    ZipcodeFormComponent
  ],
  exports: [
    StateFormComponent,
    CityFormComponent,
    ZipcodeFormComponent
  ]
})
export class AddressFormModule {}
