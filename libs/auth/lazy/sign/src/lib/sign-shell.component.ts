import { Component, ViewChild } from '@angular/core';
import { first } from 'rxjs/operators';
import { AuthService, InComponent } from '@suite/auth/shared/auth';
import { Router, ActivatedRoute } from '@angular/router';
import { MatTabGroup } from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { trigger, transition, query, animate, style } from '@angular/animations';

@Component({
  selector: 'auth-sign-shell',
  templateUrl: './sign-shell.component.html',
  styleUrls: ['./sign-shell.component.scss'],
  animations: [
    trigger('fadeAnimation', [
      transition('* => *', [
        query(':enter',
          [
            style({ opacity: 0 })
          ],
          { optional: true }
        ),
        query(':leave',
          [
            style({ opacity: 1 }),
            animate('0.5s', style({ opacity: 0 }))
          ],
          { optional: true }
        ),
        query(':enter',
          [
            style({ opacity: 0 }),
            animate('0.5s', style({ opacity: 1 }))
          ],
          { optional: true }
        )
      ])
    ])
  ]
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignShellComponent {
  form: FormGroup
  @ViewChild(MatTabGroup, { static: true }) tabs: MatTabGroup
  @ViewChild(InComponent, { static: true }) in: InComponent
  private returnUrl: string
  navLinks = [{
    path: 'in',
    label: 'Login'
  }, {
    path: 'up',
    label: 'Cadastro'
  }]
  constructor(
    private auth: AuthService,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    // private cdr: ChangeDetectorRef
  ) {
    this.form = this.fb.group({
      email: ['', [
        Validators.email,
        Validators.required
      ]],
      password: ['', [
        Validators.required,
        Validators.minLength(6)
      ]]
    })
    const { returnTo } = this.route.snapshot.queryParams
    if (returnTo) {
      console.log(returnTo)
      this.returnUrl = returnTo
    }
  }
  onSignUp(data) {
    this.auth.signUp(data)
      .pipe(first())
      .subscribe((user) => {
        if (user) {
          this.form.patchValue(data)
          this.tabs.selectedIndex = 0
          window.setTimeout(() => {
            this.in.onSignIn()
          }, 1000)
        }
      })
  }
  onSignIn(data) {
    console.log([this.returnUrl])
    this.auth.signIn(data)
      .pipe(first())
      .subscribe(() => {
        this.router.navigate([this.returnUrl])
      })
  }
  public getRouterOutletState(outlet) {
    return outlet.isActivated ? outlet.activatedRoute : '';
  }
}
