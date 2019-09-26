import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';

const _fb = new FormBuilder

export class ProfileForm extends FormGroup {
  // constructor(data) {
  //   super()
  // }
  id: number
  firstName: string
  form: FormGroup
  buildForm() {
    this.addControl('firstName', new FormControl('', [
      Validators.required,
      Validators.maxLength(45)
    ]))
    this.addControl('lastName', new FormControl('', [
      Validators.required,
      Validators.maxLength(45)
    ]))
    this.addControl('email', new FormControl('', [
      Validators.required,
      Validators.email,
      Validators.maxLength(100)
    ]))
    this.addControl('mobilePhone', new FormControl('', [
      Validators.maxLength(15)
    ]))
    this.addControl('homePhone', new FormControl('', [
      Validators.maxLength(15)
    ]))
    this.addControl('birthDate', new FormControl(new Date(), [
      Validators.maxLength(15)
    ]))
    this.addControl('employeeType', new FormControl('Teacher', [
      Validators.required
    ]))
    this.addControl('includeAsTeacher', new FormControl(true, [
      Validators.required
    ]))
    this.addControl('hireDate', new FormControl(new Date(), [
      Validators.required
    ]))
    return this
  }
  // firstName: ['', [
  //   Validators.required,
  //   Validators.maxLength(45)
  // ]],
  // lastName: ['', [
  //   Validators.required,
  //   Validators.maxLength(45)
  // ]],
  // email: ['', [
  //   Validators.required,
  //   Validators.email,
  //   Validators.maxLength(100)
  // ]],
  // mobilePhone: ['', [
  //   Validators.maxLength(15)
  // ]],
  // homePhone: ['', [
  //   Validators.maxLength(15)
  // ]],
  // birthDate: ['', [
  //   Validators.maxLength(15)
  // ]]
}
export const profileForm = _fb.group({
  id: [],
  firstName: ['', [
    Validators.required,
    Validators.maxLength(45)
  ]],
  lastName: ['', [
    Validators.required,
    Validators.maxLength(45)
  ]],
  email: ['', [
    Validators.required,
    Validators.email,
    Validators.maxLength(100)
  ]],
  mobilePhone: ['', [
    Validators.maxLength(15)
  ]],
  homePhone: ['', [
    Validators.maxLength(15)
  ]],
  birthDate: ['', [
    Validators.maxLength(15)
  ]]
})