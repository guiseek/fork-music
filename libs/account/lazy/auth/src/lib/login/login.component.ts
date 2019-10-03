import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { suiteAnimations } from '@suite/ui-kit';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { take, catchError } from 'rxjs/operators';
import { AuthService } from '@suite/account/shared/auth';
import { throwError } from 'rxjs';

@Component({
  selector: 'suite-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [
    suiteAnimations
  ]
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup
  public serverMessage: string
  // public loading = false
  private returnTo: string
  constructor(
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.loginForm = this.fb.group({
      email: ['', [
        Validators.email,
        Validators.required
      ]],
      password: ['', [
        Validators.required,
        Validators.minLength(6)
      ]]
    })
  }
  ngOnInit() {
    console.log(this.route.snapshot.queryParams)
    const { returnTo } = this.route.snapshot.queryParams
    if (returnTo) this.returnTo = returnTo
  }
  onForgot() {
    console.log('forgot')
  }
  get email() {
    return this.loginForm.get('email');
  }
  get password() {
    return this.loginForm.get('password');
  }
  onLogin() {
    this.loginForm.markAllAsTouched()
    if (this.loginForm.valid) {
      this.authService.login(
        this.loginForm.value
      ).pipe(
        catchError(({ message, ...err }) => {
          console.log(message)
          console.log(err)
          this.toggleServerMessage(message)
          // this.serverMessage = message ? message : 'Erro desconhecido'
          return throwError(err)
        })
      )
        .subscribe((response) => {
          console.log(response)
          this.serverMessage = ''
          this.router.navigateByUrl(this.returnTo)
        })
    }
  }
  toggleServerMessage(message = 'Erro :/') {
    this.serverMessage = message
    window.setTimeout(() => this.serverMessage = '', 5000)
  }
}
