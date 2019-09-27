import { Component, OnInit } from '@angular/core';
import { FormField } from '../../interfaces/form-field.interface';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'suite-form-button',
  templateUrl: './form-button.component.html',
  styles: []
})
export class FormButtonComponent implements OnInit {
  field: FormField;
  group: FormGroup;
  constructor() { }

  ngOnInit() {
  }

}
