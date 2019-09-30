import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { suiteAnimations } from '@suite/ui-kit';
import { AccountService } from '@suite/account/shared/account';

@Component({
  selector: 'auth-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
  animations: [
    suiteAnimations
  ]
})
export class SignUpComponent implements OnInit {
  form: FormGroup
  loading = false
  constructor(
    private http: HttpClient,
    private fb: FormBuilder,
    private service: AccountService
  ) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [Validators.minLength(6), Validators.required]
      ],
      passwordConfirm: ['', []],
      state: [],
      city: []
    })
  }
  onUp(value) {
    console.log(value)
    this.service.up(value)
      .subscribe((res) => {
        console.log(res)
      })
  }

  get email() {
    return this.form.get('email');
  }
  get state() {
    return this.form.get('state');
  }
  get city() {
    return this.form.get('city');
  }
  get password() {
    return this.form.get('password');
  }

  get passwordConfirm() {
    return this.form.get('passwordConfirm');
  }

  get passwordDoesMatch() {
    return this.password.value === this.passwordConfirm.value;
  }
  ngOnInit() {
  }
  onSignUp() {
    console.log(this.form.value)
    this.http.post('/api/auth/signup', this.form.value)
      .subscribe(console.log)
  }

}
