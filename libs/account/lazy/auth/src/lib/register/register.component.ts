import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { suiteAnimations, WinComponent } from '@suite/ui-kit';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { switchMap, catchError, tap, finalize, debounceTime, map } from 'rxjs/operators';
import { AccountService } from '@suite/account/shared/account';
import { timer, of, throwError } from 'rxjs';
import { confirmPassword } from '@suite/utils';
import { DialogService, DialogRef } from '@suite/cdk/dialog';

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
  // public win = false
  public code = new FormControl('', Validators.required)
  @ViewChild('confirmation', { static: true }) confirmationTemplate: TemplateRef<any>
  constructor(
    private accountService: AccountService,
    private router: Router,
    private fb: FormBuilder,
    private dialogService: DialogService
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
    }, { validator: confirmPassword('password', 'confirm') })
  }

  ngOnInit() {
    // console.log(this.win)
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
      switchMap(() => {
        this.loading = true
        return this.accountService.check(control && control.value ? control.value : '')
      }),
      catchError(({ error }) => {
        // this.loading = false
        console.log('error:', error)
        const err = {}
        err[error.error] = error.message
        return of(err)
      }),
      finalize(() => {
        window.setTimeout(() => {
          this.loading = false
        }, 2000)
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
      ).subscribe((response) => {
          const {
            confirmationCode,
            ...data
          } = response
          console.log(response)
          this.openToConfirmCode(confirmationCode)
          // this.router.navigateByUrl('/conta')
        })
    }
  }
  openToConfirmCode(code = '', win?) {
    window.setTimeout(() => {
      win.start()
    }, 2000)
    this.code.patchValue(code)
    const ref = this.dialogService.open(
      this.confirmationTemplate, {
        data: { code },
        header: {
          title: 'Confirme o código',
          // subtitle: 'Insira o código no campo abaixo para acessar'
        },
        draggable: true
      }
    )
    const sub = ref.afterClosed().subscribe((confirm) => {
      if (confirm) this.router.navigateByUrl('/conta')
      sub.unsubscribe()
    })
  }
  onSubmit(
    code: string,
    win: WinComponent,
    dialogRef: DialogRef
  ) {
    const confirm = this.accountService.confirmCode(code)
      .pipe(
        // catchError(err => throwError(err)),
        map((res) => {
          if (res) win.start()
          return res
          // this.win = true
        }),
        // debounceTime(4000),
        map((res) => {
          if (res) dialogRef.close(code)
          // this.win = false
          // this.confirmTemplate.
        })
      )
    const sub = confirm
      .subscribe((res) => {
        console.log('confirm: ', res)
        sub.unsubscribe()
      })
  }
}
