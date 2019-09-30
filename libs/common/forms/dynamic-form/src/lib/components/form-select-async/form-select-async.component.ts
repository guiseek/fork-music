import { Component, OnInit } from '@angular/core';
import { FormField } from '../../interfaces/form-field.interface';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'suite-form-select-async',
  templateUrl: './form-select-async.component.html',
  styles: []
})
export class FormSelectAsyncComponent implements OnInit {
  field: FormField;
  group: FormGroup;

  constructor() { }

  ngOnInit() {
  }

}
