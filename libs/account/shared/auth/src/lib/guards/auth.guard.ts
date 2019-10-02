import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanLoad, Router, Route, UrlSegment } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenService } from '../services';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad, CanActivate {
  constructor(
    private router: Router,
    private tokenService: TokenService
  ) {}
  canLoad(
    route: Route,
    segments: UrlSegment[]
  ): Observable<boolean> | Promise<boolean> | boolean {
    const token = this.tokenService.token
    // const { auth } = this.authService

    if (!token) {
      this.router.navigate(['/auth'])
      return false
    }
    const payload = this.tokenService.payload(
      this.tokenService.token
    )
    console.log('payload: ', payload)
    return !!payload
    // return this.accountService.getAccount(
    //   this.authService.auth
    // ).pipe(map(account => !!account))
    // return this.permissions.canLoadChildren(this.currentUser, route, segments);
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }
}
