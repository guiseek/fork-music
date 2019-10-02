import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { suiteAnimations } from '@suite/ui-kit';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { take, switchMap, catchError } from 'rxjs/operators';
import { AccountService } from '@suite/account/shared/account';
import { timer, of } from 'rxjs';
import { confirmPassword } from '@suite/utils';

@Component({
  selector: 'suite-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  animations: [
    suiteAnimations
  ]
})
export class RegisterComponent implements OnInit {
  public registerForm: FormGroup
  public serverMessage: string
  public loading = false

  constructor(
    private accountService: AccountService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.registerForm = this.fb.group({
      firstName: ['', [
        Validators.maxLength(64),
        Validators.required
      ]],
      lastName: ['', [
        Validators.maxLength(64),
        Validators.required
      ]],
      email: ['', [
        Validators.email,
        Validators.required
      ], [this.checkEmail]],
      password: ['', [
        Validators.required,
        Validators.minLength(6)
      ]],
      confirm: ['', [
        Validators.required
      ]]
    }, { validator: confirmPassword('password','confirm') } )
  }

  ngOnInit() {

  }
  get firstName() {
    return this.registerForm.get('firstName');
  }
  get lastName() {
    return this.registerForm.get('lastName');
  }
  get email() {
    return this.registerForm.get('email');
  }
  get password() {
    return this.registerForm.get('password');
  }
  get confirm() {
    return this.registerForm.get('confirm');
  }

  checkEmail = (control: FormControl) =>
    timer(600).pipe(
      switchMap(() => this.accountService.check(control && control.value ? control.value : '')),
      catchError(({ error }) => {
        console.log('error:', error)
        const err = {}
        err[error.error] = error.message
        return of(err)
      })
    )
  
  onContact() {
    console.log('contact')
  }
  onRegister() {
    this.registerForm.markAllAsTouched()
    if (this.registerForm.valid) {
      this.accountService.register(
        this.registerForm.value
      ).pipe(take(1))
        .subscribe((response) => {
          console.log(response)
          this.router.navigateByUrl('/conta')
        })
    }
  }
}
