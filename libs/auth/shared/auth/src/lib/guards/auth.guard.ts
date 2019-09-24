import { Injectable } from '@angular/core';
import { Router, CanLoad, Route } from '@angular/router';
// import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad {
  constructor(
    private router: Router,
    private service: AuthService,
  ) { }
  // canActivate(
  //   next: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot
  // ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  //   console.log(this.service.auth)
  //   return true
  //   // if (!!this.service.auth) {
  //   //   return true
  //   // } else {
  //   //   // this.router.navigate(['/auth'], {
  //   //   //   queryParams: {
  //   //   //     return: state.url
  //   //   //   }
  //   //   // })
  //   //   return false
  //   // }
  // }
  canLoad(route: Route): boolean {
    console.log(route)
    console.log(this.service.auth)
    const url = `/${route.path}`
    if (!this.service.auth) {
      this.router.navigate(['/auth'], {
        queryParams: {
          returnTo: url
        }
      })
      return false
    } else {
      return true
    }
  }
}
