import { Injectable, Inject } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

import { JWT_CONFIG_TOKEN } from '../configs/jwt.config';
import { IJwtConfig } from '../interfaces/jwt-config.interface';
import { TokenService } from '../services/token.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(
    @Inject(JWT_CONFIG_TOKEN) private _jwtConfig: IJwtConfig,
    private _tokenService: TokenService
  ) {}
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token = this._tokenService.token
    if (token) request = request.clone({
      setHeaders: this._tokenService.header
    })
    return next.handle(request)
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