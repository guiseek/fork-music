import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeStatus, EmployeeType } from '@suite/interfaces';

@Component({
  selector: 'suite-employee-status-form',
  templateUrl: './employee-status-form.component.html',
  styleUrls: ['./employee-status-form.component.scss']
})
export class EmployeeStatusFormComponent implements OnInit {
  @Input() parentForm: FormGroup
  public statusList = [{
    value: EmployeeStatus.Active,
    viewValue: 'Ativo'
  }, {
    value: EmployeeStatus.Inactive,
    viewValue: 'Inativo'
  }, {
    value: EmployeeStatus.Prospective,
    viewValue: 'Prospectivo'
  }]
  public typeList = [{
    value: EmployeeType.Teacher,
    viewValue: 'Professor'
  }, {
    value: EmployeeType.Staff,
    viewValue: 'Admnistrativo'
  }]
  constructor(
    private _fb: FormBuilder
  ) {
    if (!this.parentForm) {
      this.parentForm = this._fb.group({
        status: ['', Validators.required],
        employeeType: ['', Validators.required]
      })
    }
  }

  ngOnInit() {
  }

}
