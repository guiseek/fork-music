import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProfileForm } from './profile.form';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'suite-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.scss']
})
export class ProfileFormComponent implements OnInit {
  @Input() parentForm: FormGroup
  @Input() data
  @Input() errors: BehaviorSubject<any>
  @Output() save = new EventEmitter()
  startDate = new Date();
  constructor(
    private _fb: FormBuilder
  ) {
    const form = new ProfileForm({})

    if (!this.parentForm) {
      this.parentForm = form.buildForm()
      // this.parentForm = this._fb.group({
      //   id: [],
      //   firstName: ['', [
      //     Validators.required,
      //     Validators.maxLength(45)
      //   ]],
      //   lastName: ['', [
      //     Validators.required,
      //     Validators.maxLength(45)
      //   ]],
      //   email: ['', [
      //     Validators.required,
      //     Validators.email,
      //     Validators.maxLength(100)
      //   ]],
      //   mobilePhone: ['', [
      //     Validators.maxLength(15)
      //   ]],
      //   homePhone: ['', [
      //     Validators.maxLength(15)
      //   ]],
      //   birthDate: ['', [
      //     Validators.maxLength(15)
      //   ]]
      // })
    }
  }

  ngOnInit() {
    console.table(this.data)
    if (this.data) {
      this.parentForm.patchValue(this.data)
    }
    if (this.errors) {
      this.errors.subscribe((errors) => {
        console.log('errors: ', errors)
        if (errors) {
          // this.parentForm.setErrors(errors)
          Object.keys(errors).map((field) => {
            this.parentForm.get(field).setErrors(errors[field])
          })
          console.table(errors)
        }
      })
    }
  }
  onSubmit() {
    this.parentForm.markAllAsTouched()
    // if (this.parentForm.valid) {
    this.save.emit(
      this.parentForm.value
    )
    // }
  }
}
