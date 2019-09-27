import { Component, OnInit } from '@angular/core';
import { FormField, FormFieldOptions, FormFieldOption } from '../../interfaces/form-field.interface';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'suite-form-select',
  templateUrl: './form-select.component.html',
  styles: []
})
export class FormSelectComponent implements OnInit {
  field: FormField;
  group: FormGroup;
  options: FormFieldOption[] = []
  constructor() { }

  ngOnInit() {
    // const { options }
    this.field.options.forEach(o => {
      console.log(typeof o === 'string')
      if (typeof o === 'string') {
        this.options.push({ value: o, viewValue: o })
      } else {
        this.options.push(o)
      }

    })
    // this.options = this.field.options.map((o) => {
    // })
    console.log(this.options)
    console.log(this.field.options)
  }

}
