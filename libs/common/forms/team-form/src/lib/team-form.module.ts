import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeDetailsFormComponent } from './employee-details-form/employee-details-form.component';
import { EmployeeStatusFormComponent } from './employee-status-form/employee-status-form.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatSelectModule, } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

const modules = [
  MatIconModule,
  MatButtonModule,
  MatIconModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatAutocompleteModule
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    ...modules
  ],
  declarations: [EmployeeDetailsFormComponent, EmployeeStatusFormComponent],
  exports: [EmployeeDetailsFormComponent, EmployeeStatusFormComponent]
})
export class TeamFormModule {}
