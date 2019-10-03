import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AUTH_CONFIG_TOKEN } from '../configs/auth.config';
import { IAuthConfig } from '../interfaces/auth-config.interface';
import { map, tap, catchError } from 'rxjs/operators';
import { TokenService } from './token.service';
import { throwError } from 'rxjs';

@Injectable()
export class AuthService {
  constructor(
    @Inject(AUTH_CONFIG_TOKEN) private _authConfig: IAuthConfig,
    private _tokenService: TokenService,
    private _http: HttpClient
  ) {
    console.log(this._authConfig)
  }
  login(data) {
    return this._http.post(
      this.endpoint('login'), data
    ).pipe(
      catchError(({ error }) => throwError(error)),
      tap(response => this._tokenService.setToken(response))
    )
  }
  email(email) {
    return this._http.post(
      this.endpoint('email'), { email }
    )
  }
  me() {
    return this._http.get(
      this.endpoint('me')
    )
  }
  logout() {
    this._tokenService.clear()
  }
  private endpoint(action: string): string {
    const { api, endpoint, ...config } = this._authConfig
    return `${api}${endpoint}${config[action]}`
  }
}
