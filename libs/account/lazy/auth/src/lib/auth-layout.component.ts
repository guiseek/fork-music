import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, FormControl } from '@angular/forms';
import { AccountService } from '@suite/account/shared/account';
import { MatStepper } from '@angular/material';

@Component({
  selector: 'suite-auth-layout',
  templateUrl: './auth-layout.component.html',
  styleUrls: ['./auth-layout.component.scss']
})
export class AuthLayoutComponent implements OnInit {
  userAccountFormGroup: FormGroup;
  confirmationCodeFormGroup: FormGroup;
  @ViewChild(MatStepper, { static: true }) stepper: MatStepper
  constructor(
    private _formBuilder: FormBuilder,
    private accountService: AccountService
  ) { }

  ngOnInit() {
    console.log(this.stepper)
    this.userAccountFormGroup = this._formBuilder.group({
      firstName: ['', [
        Validators.required,
        Validators.maxLength(64)
      ]],
      lastName: ['', [
        Validators.required,
        Validators.maxLength(64)
      ]],
      password: ['', [
        Validators.required
      ]],
      email: ['', [
        Validators.required,
        Validators.email,
        Validators.maxLength(128)
      ]]
    });
    this.confirmationCodeFormGroup = this._formBuilder.group({
      confirmationCode: ['', Validators.required]
    });
  }
  uafg(control: string): FormControl {
    return this.userAccountFormGroup.get(control) as FormControl
  }
  onSubmitUserAccount() {
    console.table(this.userAccountFormGroup)
    const { value } = this.userAccountFormGroup
    this.accountService.in(value).subscribe((res) => {
      console.log(res)
      this.stepper.next()
    })
  }
}
