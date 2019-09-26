import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EmployeeStatus, EmployeeType } from '@suite/interfaces';

export class EmployeeStatusControl extends FormControl {
  constructor(
    status: EmployeeStatus = EmployeeStatus.Active
  ) {
    super(status, [Validators.required])
  }
}
export class EmployeeTypeControl extends FormControl {
  constructor(
    status: EmployeeType = EmployeeType.Teacher
  ) {
    super(status, [Validators.required])
  }
}

export class EmployeeStatusForm extends FormGroup {
  private __status: EmployeeStatus
  private __employeeType: EmployeeType
  constructor(
    { status, employeeType } = { status: null, employeeType: null }
  ) {
    super({
      status: new EmployeeStatusControl(status),
      employeeType: new EmployeeTypeControl(employeeType)
    })
    // this.buildForm()
  }
  set _status(status: EmployeeStatus) {
    this.statusControl.patchValue(status)
    this.__status = status
  }
  get _status() {
    return this.__status
  }
  get statusControl() {
    return this.get('status')
  }
  set _employeeType(employeeType: EmployeeType) {
    this.employeeTypeControl.patchValue(employeeType)
    this.__employeeType = employeeType
  }
  get _employeeType() {
    return this.__employeeType
  }
  get employeeTypeControl() {
    return this.get('employeeType')
  }
  // buildForm() {
  //   this.addControl('status', new EmployeeStatusControl())
  //   this.addControl('employeeType', new EmployeeTypeControl())
  // }
}