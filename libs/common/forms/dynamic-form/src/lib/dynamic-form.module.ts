import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { ReactiveFormsModule } from '@angular/forms';

import { MatMomentDateModule } from "@angular/material-moment-adapter";
import {
  MatButtonModule,
  MatIconModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatListModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatSelectModule,
  MatOptionModule,
  MatCheckboxModule,
  MatRadioModule,
  MAT_DATE_LOCALE
} from "@angular/material";

import { FlexLayoutModule } from '@angular/flex-layout';
import { FormInputComponent } from './components/form-input/form-input.component';
import { FormSelectComponent } from './components/form-select/form-select.component';
import { FormDateComponent } from './components/form-date/form-date.component';
import { FormCheckboxComponent } from './components/form-checkbox/form-checkbox.component';
import { FormRadiobuttonComponent } from './components/form-radiobutton/form-radiobutton.component';
import { FormButtonComponent } from './components/form-button/form-button.component';
import { DynamicFieldDirective } from './dynamic-field.directive';

const modules = [
  MatButtonModule,
  MatIconModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatListModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatMomentDateModule,
  MatSelectModule,
  MatOptionModule,
  MatCheckboxModule,
  MatRadioModule
];

const components = [
  FormInputComponent,
  FormSelectComponent,
  FormDateComponent,
  FormCheckboxComponent,
  FormRadiobuttonComponent,
  FormButtonComponent,
]

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    ...modules
  ],
  declarations: [
    DynamicFormComponent,
    DynamicFieldDirective,
    ...components
  ],
  exports: [
    DynamicFormComponent,
    DynamicFieldDirective,
    ...components
  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'pt-BR' }
  ],
  entryComponents: [
    ...components
  ]
})
export class DynamicFormModule {}
