import { Component, OnInit } from '@angular/core';
import { FormField, FormFieldOption } from '../../interfaces/form-field.interface';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'suite-form-radiobutton',
  templateUrl: './form-radiobutton.component.html',
  styles: []
})
export class FormRadiobuttonComponent implements OnInit {
  field: FormField;
  group: FormGroup;
  options: FormFieldOption[] = []

  constructor() { }

  ngOnInit() {
    this.field.options.forEach(o => {
      if (typeof o === 'string') {
        this.options.push({ value: o, viewValue: o })
      } else {
        this.options.push(o)
      }
    })
  }

}
