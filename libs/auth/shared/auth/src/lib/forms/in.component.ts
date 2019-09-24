import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'auth-in',
  templateUrl: './in.component.html',
  styleUrls: ['./auth-form.component.scss']
})
export class InComponent implements OnInit {
  form: FormGroup
  checkingEmail = false

  @Output() in = new EventEmitter()

  constructor(
    private _fb: FormBuilder
  ) {
    this.form = this._fb.group({
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
  get email() {
    return this.form.get('email');
  }
  get password() {
    return this.form.get('password');
  }
  ngOnInit() {
  }

  onSignIn() {
    return this.in.emit(this.form.value)
  }
}
