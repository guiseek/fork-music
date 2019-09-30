import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanLoad, Route, Router, UrlSegment } from '@angular/router';
import { Observable, of, EMPTY } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '@suite/auth/shared/auth';
import { AccountService } from '../services/account.service';
import { first, map, tap, take } from 'rxjs/operators';
import { IUserAccount } from '@suite/interfaces';

@Injectable({
  providedIn: 'root'
})
export class AccountGuard implements CanLoad {
  // constructor(
  //   private router: Router,
  //   private authService: AuthService,
  //   private accountService: AccountService,
  // ) {}
  constructor(
    private router: Router,
    private authService: AuthService,
    private accountService: AccountService,
    // private permissions: Permissions,
    // private currentUser: AuthToken
  ) { }

  canLoad(route: Route, segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    const { auth } = this.authService
    if (!auth) {
      this.router.navigate(['/up'])
      return false
    }
    return this.accountService.getAccount(
      this.authService.auth
    ).pipe(map(account => !!account))
    // return this.permissions.canLoadChildren(this.currentUser, route, segments);
  }
  // canLoad(route: Route, segments: UrlTree) {
  //   const { auth } = this.authService
  //   if (!auth) {
  //     this.router.navigate(['/auth'], {
  //       queryParams: {
  //         returnTo: route.path
  //       }
  //     })
  //   }
  //   return this.accountService.getAccount(auth).pipe(
  //     take(1),
  //     map((user) => {
  //       console.log(user)
  //       return !!user
  //     })
  //   )
  // }
  // canLoad(
  //   next: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot
  // ): Observable<boolean> | Promise<boolean> | boolean {
  //   const { auth } = this.authService
  //   if (!auth) {
  //     this.router.navigate(['/auth'], {
  //       queryParams: {
  //         returnTo: state.url
  //       }
  //     })
  //   }
  //   return this.accountService.getAccount(auth).pipe(
  //     take(1),
  //     map(user => {
  //       console.log(user)
  //       return !!user
  //     }),
  //     tap(hasAuth => {
  //       console.log(hasAuth)
  //       if (!hasAuth) {
  //         // this.auth.signOut()
  //         // if (next.)
  //         this.router.navigate(['/auth'], {
  //           queryParams: {
  //             returnTo: state.url
  //           }
  //         })
  //       }
  //     })
  //   )
  // }  

  // canActivate(
  //   next: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot): boolean {
  //   console.log('AuthGuard#canActivate called');
  //   return this.accountService.getAccount(
  //     this.authService.auth
  //   ).pipe(
  //     take(1),
  //     map(account => !!account),
  //     tap(account => {
  //       return !!account
  //     })
  //   )
  //   return true;
  // }
  // canActivate(
  //   next: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot
  // ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  //   return true;
  // }
  // canActivate(route: Route): Observable<IUserAccount> | Observable<boolean> | boolean {
  //   console.log(route)
  //   // console.log(this.service.auth)
  //   const url = `/${route.path}`
  //   if (!this.authService.auth) {
  //     this.router.navigate(['/auth'], {
  //       queryParams: {
  //         returnTo: url
  //       }
  //     })
  //     return false
      
  //   }
  //   return this.accountService.resolve(
  //     this.authService.auth
  //   )
  //   // .pipe(
  //   //   tap((account) => {
  //   //     if (account) {
  //   //       return of(account)
  //   //     }
  //   //     else {
  //   //       return EMPTY
  //   //     }
  //   //   })
  //   // )
  // }
  // getAccount() {

  // }
}
