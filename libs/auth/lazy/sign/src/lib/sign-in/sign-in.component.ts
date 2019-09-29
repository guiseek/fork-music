import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '@suite/auth/shared/auth';
import { suiteAnimations } from '@suite/ui-kit';

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
  constructor(
    // private http: HttpClient,
    private auth: AuthService,
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
  }
  onSignIn() {
    console.log(this.form.value)
    this.auth.signIn(this.form.value)
      .subscribe(console.log)
    // this.http.post('/api/auth/signin', this.form.value)
    //   .subscribe(console.log)
  }
}
