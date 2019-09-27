import { Directive, OnInit, Input, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';
import { FormInputComponent } from './components/form-input/form-input.component';
import { FormButtonComponent } from './components/form-button/form-button.component';
import { FormSelectComponent } from './components/form-select/form-select.component';
import { FormDateComponent } from './components/form-date/form-date.component';
import { FormRadiobuttonComponent } from './components/form-radiobutton/form-radiobutton.component';
import { FormCheckboxComponent } from './components/form-checkbox/form-checkbox.component';
import { FormField } from './interfaces/form-field.interface';
import { FormGroup } from '@angular/forms';

const componentMapper = {
  input: FormInputComponent,
  button: FormButtonComponent,
  select: FormSelectComponent,
  date: FormDateComponent,
  radiobutton: FormRadiobuttonComponent,
  checkbox: FormCheckboxComponent
};

@Directive({
  selector: '[suiteDynamicField]'
})
export class DynamicFieldDirective implements OnInit {
  @Input() field: FormField;
  @Input() group: FormGroup;
  componentRef: any;
  constructor(
    private resolver: ComponentFactoryResolver,
    private container: ViewContainerRef
  ) { }
  ngOnInit() {
    const factory = this.resolver.resolveComponentFactory(
      componentMapper[this.field.type]
    );
    this.componentRef = this.container.createComponent(factory);
    this.componentRef.instance.field = this.field;
    this.componentRef.instance.group = this.group;
  }
}