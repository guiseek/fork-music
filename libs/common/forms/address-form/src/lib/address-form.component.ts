import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { map } from 'rxjs/operators';

@Component({
  selector: 'suite-address-form',
  templateUrl: './address-form.component.html',
  styles: []
})
export class AddressFormComponent implements OnInit {
  @Input() parentForm: FormGroup
  @Output() formChange = new EventEmitter()
  constructor(
    private _fb: FormBuilder
  ) {
    if (!this.parentForm) {
      this.parentForm = this._fb.group({
        neighborhood: [],
        street_address: [],
        street_number: []
      }, { updateOn: 'blur' })
      // this.parentForm.valueChanges.pipe(
      //   map(value => this.formChange.emit(value))
      // )
    }
  }

  ngOnInit() {
  }

}
