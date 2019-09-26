import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { DynamicFormQuestionComponent } from './dynamic-form-question/dynamic-form-question.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

const modules = [
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule
];
@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ...modules
  ],
  declarations: [DynamicFormComponent, DynamicFormQuestionComponent],
  exports: [DynamicFormComponent, DynamicFormQuestionComponent]
})
export class DynamicFormModule {}
