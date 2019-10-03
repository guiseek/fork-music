import { Component, OnInit } from '@angular/core';
import { FormField, FormFieldOption, FormFieldOptions } from '../../interfaces/form-field.interface';
import { FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'suite-form-select',
  templateUrl: './form-select.component.html',
  styles: []
})
export class FormSelectComponent implements OnInit {
  field: FormField;
  group: FormGroup;
  options: FormFieldOption[] = []
  options$: Observable<FormFieldOption[]>
  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
    // const { asyncConfig, ...options } = this.field
    this.options$ = this.getOptions(this.field)
    // this.field.options.forEach(o => {
    //   if (typeof o === 'string') {
    //     this.options.push({ value: o, viewValue: o })
    //   } else {
    //     this.options.push(o)
    //   }
    // })
  }
  getOptions({ asyncConfig, options }: FormField) {
    if (asyncConfig) {
      const { endpoint, ...config } = asyncConfig
      return this.http.get(endpoint)
        .pipe(
          map((response) => this.formatOptions(response, config))
        )
    } else {
      const opts = this.formatOptions(options)
      return of(opts)
    }
  }
  formatOptions(options, config?: { value: string, viewValue: string }) {
    const opts = []
    options.forEach(o => {
      if (typeof o === 'string') {
        opts.push({ value: o, viewValue: o })
      } else {
        opts.push({
          value: o[config.value],
          viewValue: o[config.viewValue]
        })
      }
    })
    return opts
  }
}
