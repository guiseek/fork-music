import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, ValidationErrors, Validators } from '@angular/forms';
import { Observer, Observable, timer, throwError, of } from 'rxjs';
import { AuthService } from '../auth.service';
import { LocationCity } from '@suite/interfaces';
import { tap, map, debounceTime, switchMap, filter, catchError } from 'rxjs/operators';

@Component({
  selector: 'auth-up',
  templateUrl: './up.component.html',
  styleUrls: ['./auth-form.component.scss']
})
export class UpComponent implements OnInit {
  form: FormGroup
  checkingEmail = false

  @Output() up = new EventEmitter()

  constructor(
    private _fb: FormBuilder,
    private authService: AuthService
  ) {
    this.form = this._fb.group({
      firstName: ['', [
        Validators.required,
        Validators.maxLength(64)
      ]],
      lastName: ['', [
        Validators.required,
        Validators.maxLength(64)
      ]],
      username: ['', [
        Validators.required,
        Validators.maxLength(64)
      ]],
      email: ['', [
        Validators.email,
        Validators.required
      ], [this.checkEmail]],
      password: ['', [Validators.required]],
      confirm: ['', [this.confirmValidator]],
      state: [],
      city: []
    })
  }
  get firstName() {
    return this.form.get('firstName');
  }
  get lastName() {
    return this.form.get('lastName');
  }
  get username() {
    return this.form.get('username');
  }
  get email(): FormControl {
    return this.form.get('email') as FormControl;
  }
  get password() {
    return this.form.get('password');
  }
  get state() {
    return this.form.get('state');
  }
  get city() {
    return this.form.get('city');
  }
  onCityChanged(city: LocationCity) {
    console.log('city: ', city)
    this.city.patchValue(city.id)
    this.state.patchValue(city.state.id)
  }
  ngOnInit() {
  }
  confirmValidator = (control: FormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return { error: true, required: true };
    } else if (control.value !== this.form.controls.password.value) {
      return { confirm: true, error: true };
    }
    return {};
  };
  get passwordConfirm() {
    return this.form.get('confirm');
  }

  get passwordDoesMatch() {
    return this.password.value === this.passwordConfirm.value;
  }

  checkEmail = (control: FormControl) =>
    timer(600).pipe(
      switchMap(() => this.authService.checkEmail(control && control.value ? control.value : '')),
      catchError(({error}) => {
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
  // map((exist) => {
  //   console.log('error: ', exist)
  //   if (exist) {
  //     return { error: true, duplicated: true }
  //     // observer.next({ error: true, duplicated: true });
  //   } else {
  //     // console.log('certo: ', value)
  //     return null
  //     // observer.next(null)
  //   }
  // }))
  // .subscribe((value) => {
  //   if (value) {
  //     console.log('error: ', value)
  //     observer.next({ error: true, duplicated: true });
  //   } else {
  //     console.log('certo: ', value)
  //     observer.next(null)
  //   }
  //   observer.complete();
  // }))

  // }, 1000)
  // })
  // this.authService.checkEmail(control.value)
  //   .pipe(
  //     map(value => {
  //       console.log(value)
  //       return value
  //     }),
  //     debounceTime(1000),
  //     tap((res) => {
  //       console.log(res)
  //     })
  //   )
  userEmailAsyncValidator = (control: FormControl) =>
    new Observable((observer: Observer<ValidationErrors | null>) => {
      setTimeout(() => {
        console.log(control.value)
        if (control.value === 'qwe@qwe.com') {
          // you have to return `{error: true}` to mark it as an error event
          observer.next({ error: true, duplicated: true });
        } else {
          observer.next(null);
        }
        observer.complete();
      }, 1000);
    });
  onSignUp() {
    return this.up.emit(this.form.value)
  }
}
