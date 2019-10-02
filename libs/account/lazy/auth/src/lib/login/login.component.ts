import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { suiteAnimations } from '@suite/ui-kit';
import { take } from 'rxjs/operators';
import { AuthService } from '@suite/account/shared/auth';

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
  public loading = false
  private returnTo: string
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router,
  ) {
    this.loginForm = this.fb.group({
      email: ['guiseek@gmail.com', [
        Validators.email,
        Validators.required
      ]],
      password: ['guiseek', [
        Validators.required,
        Validators.minLength(6)
      ]]
    })
  }
  get email() {
    return this.loginForm.get('email');
  }
  get password() {
    return this.loginForm.get('password');
  }
  ngOnInit() {
    console.log(this.route.snapshot.queryParams)
    const { returnTo } = this.route.snapshot.queryParams
    if (returnTo) this.returnTo = returnTo
  }
  onForgot() {
    console.log('forgot')
  }
  onLogin() {
    this.loginForm.markAllAsTouched()
    if (this.loginForm.valid) {
      this.authService.login(
        this.loginForm.value
      )
        .pipe(take(1))
        .subscribe((response) => {
          console.log(response)
          this.router.navigateByUrl(this.returnTo)
        })      // this.accountService.login(
      //   this.loginForm.value
      // ).pipe(take(1))
      //   .subscribe((response) => {
      //     console.log(response)
      //   })
    }
  }
}
