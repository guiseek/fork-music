import { NgModule } from '@angular/core';
import { MatMomentDateModule } from "@angular/material-moment-adapter";
import {
  MatFormFieldModule,
  MatInputModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatSelectModule,
  MatOptionModule,
  MatAutocompleteModule,
  MatCheckboxModule,
  MatRadioModule,
  MatSlideToggleModule,
  MatSliderModule
} from "@angular/material";
const modules = [
  MatFormFieldModule,
  MatInputModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatSelectModule,
  MatOptionModule,
  MatAutocompleteModule,
  MatCheckboxModule,
  MatRadioModule,
  MatSlideToggleModule,
  MatSliderModule,
  MatMomentDateModule
]

@NgModule({
  imports: [],
  exports: [modules]
})
export class SharedMaterialFormModule { }
