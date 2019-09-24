import { Component, ChangeDetectionStrategy } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay, first } from 'rxjs/operators';
import { AuthService } from '@suite/auth/shared/auth';
import { RouterOutlet, Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'auth-sign-shell',
  templateUrl: './sign-shell.component.html',
  styleUrls: ['./sign-shell.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignShellComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe([Breakpoints.Handset])
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
  authState: Observable<any>;
  navLinks = [{
    label: 'Login',
    path: 'in',
  }, {
    label: 'Começar',
    path: 'up',
  }]
  private returnUrl: string
  constructor(
    private breakpointObserver: BreakpointObserver,
    private auth: AuthService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    const { returnTo } = this.route.snapshot.queryParams
    if (returnTo) {
      console.log(returnTo)
      this.returnUrl = returnTo
    }

    this.authState = this.auth.authState
  }
  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
  onSignUp(data) {
    console.log('d: ', data)
    this.auth.signUp(data)
      .pipe(first())
      .subscribe((user) => {
        console.table(user)
        this.router.navigate([this.returnUrl])
      })
  }
  onSignIn(data) {
    console.log('d: ', data)
    this.auth.signIn(data)
      .pipe(first())
      .subscribe((user) => {
        console.table(user)
        this.router.navigate([this.returnUrl])
      })
  }
}
