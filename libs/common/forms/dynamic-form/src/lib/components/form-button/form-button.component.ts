import { Component, OnInit } from '@angular/core';
import { FormField } from '../../interfaces/form-field.interface';
import { FormGroup } from '@angular/forms';
import { FormConfig } from '../../interfaces/form-config.interface';
// import { FormConfig } from '@suite/common/forms/form-backend';

@Component({
  selector: 'suite-form-button',
  templateUrl: './form-button.component.html',
  styles: []
})
export class FormButtonComponent implements OnInit {
  field: FormField;
  group: FormGroup;
  config?: FormConfig;
  disableInvalid: boolean
  constructor() { }

  ngOnInit() {
  }

}
