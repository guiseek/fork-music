import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'auth-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  form: FormGroup
  constructor(
    private http: HttpClient,
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      username: ['', [
        Validators.required
      ]],
      password: ['', [
        Validators.required
      ]]
    })
  }

  ngOnInit() {
  }
  onSignIn() {
    console.log(this.form.value)
    this.http.post('/api/auth/signin', this.form.value)
      .subscribe(console.log)
  }
}
