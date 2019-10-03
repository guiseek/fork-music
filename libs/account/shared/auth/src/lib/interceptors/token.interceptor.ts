import { Injectable, Inject } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse } from '@angular/common/http';
import { Observable, BehaviorSubject, throwError } from 'rxjs';

import { JWT_CONFIG_TOKEN } from '../configs/jwt.config';
import { IJwtConfig } from '../interfaces/jwt-config.interface';
import { TokenService } from '../services/token.service';
import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(
    @Inject(JWT_CONFIG_TOKEN) private _jwtConfig: IJwtConfig,
    private _tokenService: TokenService,
    private router: Router
  ) { }
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token = this._tokenService.token
    if (token) request = this.getCloneRequestWithToken(request, token)

    return next.handle(request).pipe(
      catchError((err) => {
        this.catchRedirectError(err);
        return throwError(err)
      })
    )
    // return next.handle(request)
  }
  getCloneRequestWithToken(request: HttpRequest<any>, token: string) {
    return request.clone({
      setHeaders: this._tokenService.header
    })
  }
  catchRedirectError(err: any): void {
    if (err instanceof HttpErrorResponse) {
      if (err.status === 401) {
        this._tokenService.clear()
        this.router.navigateByUrl('/auth');
      }
    }
  }
}
//   constructor(
//     private authService: AuthService,
//     private router: Router
//   ) { }

//   intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//     // add authorization header with jwt token if available
//     const token = this.authService.token;
//     if (token) request = this.getCloneRequestWithToken(request, token);

//     return next.handle(request).pipe(
//       catchError((err) => {
//         this.catchRedirectError(err);
//         return throwError(err)
//       })
//     )
//   }
//   getCloneRequestWithToken(request: HttpRequest<any>, token: string) {
//     return request.clone({
//       setHeaders: { Authorization: `Bearer ${token}` }
//     });
//   }
//   catchRedirectError(err: any): void {
//     if (err instanceof HttpErrorResponse) {
//       if (err.status === 401) {
//         this.router.navigateByUrl('/auth');
//       }
//     }
//   }
// }