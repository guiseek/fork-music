import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '@suite/auth/shared/auth';
import { suiteAnimations } from '@suite/ui-kit';
import { AccountService } from '@suite/account/shared/account';
import { Router, ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators';

@Component({
  selector: 'auth-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
  animations: [
    suiteAnimations
  ]
})
export class SignInComponent implements OnInit {
  form: FormGroup
  serverMessage: string
  loading = false
  returnTo
  constructor(
    private http: HttpClient,
    private auth: AuthService,
    private account: AccountService,
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [Validators.minLength(6), Validators.required]
      ]
    })
  }
  get email() {
    return this.form.get('email');
  }
  get password() {
    return this.form.get('password');
  }
  ngOnInit() {
    console.log(this.route.snapshot.queryParams)
    const { returnTo } = this.route.snapshot.queryParams
    if (returnTo) this.returnTo = returnTo
  }
  setReturnTo({ returnTo }) {
    if (returnTo) this.returnTo = returnTo
  }
  onSignIn() {
    console.log(this.form.value)
    // this.auth.in(this.form.value)
    //   .subscribe(console.log)
    this.auth.in(this.form.value)
      .pipe(take(1))
      .subscribe(() => {
        if (this.returnTo) this.router.navigateByUrl(this.returnTo)
      })
  }
}
