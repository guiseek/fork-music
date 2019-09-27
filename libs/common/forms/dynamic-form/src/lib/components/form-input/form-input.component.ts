import { Component, OnInit } from '@angular/core';
import { FormField } from '../../interfaces/form-field.interface';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'suite-form-input',
  templateUrl: './form-input.component.html',
  styles: []
})
export class FormInputComponent implements OnInit {
  field: FormField;
  group: FormGroup;
  constructor() { }
  ngOnInit() { }
}
