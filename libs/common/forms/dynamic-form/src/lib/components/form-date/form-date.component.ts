import { Component, OnInit } from '@angular/core';
import { FormField } from '../../interfaces/form-field.interface';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'suite-form-date',
  templateUrl: './form-date.component.html',
  styles: []
})
export class FormDateComponent implements OnInit {
  field: FormField;
  group: FormGroup;
  constructor() { }

  ngOnInit() {
  }

}
