import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, FormControl } from '@angular/forms';
import { AccountService } from '@suite/account/shared/account';
import { MatStepper } from '@angular/material';
import { timer, of, Observable } from 'rxjs';
import { switchMap, catchError } from 'rxjs/operators';
import { IUserGroupType } from '@suite/interfaces';
import { createUserAccountForm, createUserGroupForm, createInGroupForm, createUserAccountFormStep, confirmationCodeFormStep, createUserGroupFormStep, createInGroupFormStep } from '@suite/account/shared/resources';

@Component({
  selector: 'suite-auth-layout',
  templateUrl: './auth-layout.component.html',
  styleUrls: ['./auth-layout.component.scss']
})
export class AuthLayoutComponent implements OnInit {
  userAccountFormGroup: FormGroup;
  confirmationCodeFormGroup: FormGroup;
  userAccountGroupFormGroup: FormGroup;
  @ViewChild(MatStepper, { static: true }) stepper: MatStepper
  groupTypes$: Observable<IUserGroupType[]>

  forms = [
    createUserAccountFormStep,
    createUserGroupFormStep,
    createInGroupFormStep,
    confirmationCodeFormStep
  ]
  constructor(
    private _formBuilder: FormBuilder,
    private accountService: AccountService
  ) { }
  onSaved(data) {
    console.log(data)
    this.stepper.next()
  }
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
      ], [this.checkEmail]]
    });
    this.confirmationCodeFormGroup = this._formBuilder.group({
      confirmationCode: ['', Validators.required]
    });
    this.userAccountGroupFormGroup = this._formBuilder.group({
      userGroupType: ['', Validators.required],
      customerInvoiceData: ['', Validators.required],
    });
    this.groupTypes$ = this.accountService.getGroupTypes()
  }
  uafg(control: string): FormControl {
    return this.userAccountFormGroup.get(control) as FormControl
  }
  get confirmationCode() {
    return this.confirmationCodeFormGroup.get('confirmationCode')
  }
  onSubmitUserAccount() {
    console.table(this.userAccountFormGroup)
    const { value } = this.userAccountFormGroup
    this.accountService.in(value)
      .subscribe(({ firstName, confirmationCode }) => {
        console.log(firstName, confirmationCode)



        this.confirmationCodeFormGroup.patchValue({
          confirmationCode
        })
        this.stepper.next()
      })
  }
  onSubmitConfirmationCode() {
    console.table(this.confirmationCodeFormGroup)
    const { value } = this.confirmationCodeFormGroup
    this.accountService.confirm(value.confirmationCode)
      .subscribe((response) => {
        console.log(response)
        this.stepper.next()
      })
  }
  onSubmitUserGroup() {
    console.table(this.userAccountGroupFormGroup.value)
    // const { value } = this.confirmationCodeFormGroup
    // this.accountService.confirm(value.confirmationCode)
    //   .subscribe((response) => {
    //     console.log(response)
    //     this.stepper.next()
    //   })
  }
  checkEmail = (control: FormControl) =>
    timer(600).pipe(
      switchMap(() => this.accountService.verifyEmail(control && control.value ? control.value : '')),
      catchError(({ error }) => {
        console.log('error:', error)
        const err = {}
        err[error.error] = error.message
        return of(err)
        // return throwError(error.message)
      }),
      // map((user) => {
      //   console.log('user: ', user)
      //   if (user) {
      //     return { error: true, duplicated: true }
      //   } else {
      //     return null
      //   }
      // }),
      // tap()
    )
}
