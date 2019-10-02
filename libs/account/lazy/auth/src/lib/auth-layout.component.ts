import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { AccountService } from '@suite/account/shared/account';
import { timer, of, Observable } from 'rxjs';
import { switchMap, catchError } from 'rxjs/operators';
import { IUserGroupType } from '@suite/interfaces';
// import { AuthService } from '@suite/account/shared/auth';

@Component({
  selector: 'suite-auth-layout',
  templateUrl: './auth-layout.component.html',
  styleUrls: ['./auth-layout.component.scss']
})
export class AuthLayoutComponent implements OnInit {
  // userAccountFormGroup: FormGroup;
  // confirmationCodeFormGroup: FormGroup;
  // userAccountGroupFormGroup: FormGroup;
  // @ViewChild(MatStepper, { static: true }) stepper: MatStepper
  // groupTypes$: Observable<IUserGroupType[]>

  // userAccountForm = createUserAccountFormStep
  // userGroupForm = createUserGroupFormStep
  // inGroupForm = createInGroupFormStep
  // confirmationCodeForm = confirmationCodeFormStep
  // forms = [
  //   createUserAccountFormStep,
  //   createUserGroupFormStep,
  //   createInGroupFormStep,
  //   confirmationCodeFormStep
  // ]
  constructor(
    private _formBuilder: FormBuilder,
    // private authService: AuthService,
    private accountService: AccountService
  ) { }
  onSaved(data) {
    console.log(data)
    // this.stepper.next()
  }
  public getRouterOutletState(outlet) {
    return outlet.isActivated ? outlet.activatedRoute : '';
  }
  ngOnInit() {
    // console.log(this.stepper)
  }
  // onSubmitUserAccount() {
  //   console.table(this.userAccountFormGroup)
  //   const { value } = this.userAccountFormGroup
  //   this.accountService.in(value)
  //     .subscribe(({ firstName, confirmationCode }) => {
  //       console.log(firstName, confirmationCode)



  //       this.confirmationCodeFormGroup.patchValue({
  //         confirmationCode
  //       })
  //       // this.stepper.next()
  //     })
  // }
  // onSubmitConfirmationCode() {
  //   console.table(this.confirmationCodeFormGroup)
  //   const { value } = this.confirmationCodeFormGroup
  //   this.accountService.confirm(value.confirmationCode)
  //     .subscribe((response) => {
  //       console.log(response)
  //       // this.stepper.next()
  //     })
  // }
  // onSubmitUserGroup() {
  //   console.table(this.userAccountGroupFormGroup.value)
  //   // const { value } = this.confirmationCodeFormGroup
  //   // this.accountService.confirm(value.confirmationCode)
  //   //   .subscribe((response) => {
  //   //     console.log(response)
  //   //     this.stepper.next()
  //   //   })
  // }
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
