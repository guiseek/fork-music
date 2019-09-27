import { Component, OnInit } from '@angular/core';
import { FormField } from '../../interfaces/form-field.interface';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'suite-form-checkbox',
  templateUrl: './form-checkbox.component.html',
  styles: []
})
export class FormCheckboxComponent implements OnInit {
  field: FormField;
  group: FormGroup;
  constructor() { }

  ngOnInit() {
  }

}
