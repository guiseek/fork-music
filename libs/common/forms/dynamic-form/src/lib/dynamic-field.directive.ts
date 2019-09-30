import { Directive, OnInit, Input, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';
import { FormInputComponent } from './components/form-input/form-input.component';
import { FormButtonComponent } from './components/form-button/form-button.component';
import { FormSelectComponent } from './components/form-select/form-select.component';
import { FormDateComponent } from './components/form-date/form-date.component';
import { FormRadiobuttonComponent } from './components/form-radiobutton/form-radiobutton.component';
import { FormCheckboxComponent } from './components/form-checkbox/form-checkbox.component';
import { FormField } from './interfaces/form-field.interface';
import { FormGroup } from '@angular/forms';
import { CityFormComponent } from '@suite/common/forms/resources';
import { FormSelectAsyncComponent } from './components/form-select-async/form-select-async.component';
import { HttpClient } from '@angular/common/http';
import { FormConfig } from './interfaces/form-config.interface';
// import { FormConfig } from '@suite/common/forms/form-backend';

const componentMapper = {
  input: FormInputComponent,
  button: FormButtonComponent,
  select: FormSelectComponent,
  date: FormDateComponent,
  radiobutton: FormRadiobuttonComponent,
  checkbox: FormCheckboxComponent,
  city: CityFormComponent,
  selectAsync: FormSelectAsyncComponent
};

@Directive({
  selector: '[suiteDynamicField]'
})
export class DynamicFieldDirective implements OnInit {
  @Input() field: FormField;
  @Input() group: FormGroup;
  @Input() config: FormConfig
  componentRef: any;
  constructor(
    private resolver: ComponentFactoryResolver,
    private container: ViewContainerRef,
    private http: HttpClient
  ) { }
  ngOnInit() {
    const factory = this.resolver.resolveComponentFactory(
      componentMapper[this.field.type]
    );
    if (this.field.type === 'selectAsync') {
      this.field.options$ = this.http.get(
        this.field.asyncConfig.endpoint
      )
    }

    this.componentRef = this.container.createComponent(factory);
    this.componentRef.instance.field = this.field;
    this.componentRef.instance.group = this.group;

    if (this.field.type === 'button') {
      this.componentRef.instance.config = this.config
    }
  }
}