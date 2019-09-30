import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject, throwError, EMPTY, of } from 'rxjs';
import { map, tap, catchError } from 'rxjs/operators';
import { AuthJwtPayload } from '@suite/interfaces';

const API = '/api/auth'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private AUTH_KEY = 'auth';
  private TOKEN_KEY = 'access_token';
  private _authState = new Subject
  public authState = this._authState.asObservable()
  constructor(
    private http: HttpClient
  ) { }
  signUp(data) {
    return this.http.post(API + '/signup', data)
      .pipe(
        map((user: any) => {
          console.log(user)
          return user
        }),
        catchError((response) => throwError(response.error)),
        // tap((auth: any) => this.setAuth(auth)),
      )
  }
  signIn(data) {
    return this.http.post(API + '/signin', data)
      .pipe(
        map((auth: any) => {
          console.log(auth)
          return auth
        }),
        map((auth: any) => this.setAuth(auth)),
        catchError((response) => throwError(response.error)),
        // tap(auth => this._authState.next(auth))
      )
  }
  setAuth(auth: any) {
    if (!auth) return;
    this.auth = auth.payload;
    this.token = auth.access_token;
    this._authState.next(auth)
  }
  set auth(payload: AuthJwtPayload) {
    window.localStorage.setItem(
      this.AUTH_KEY,
      JSON.stringify(payload)
    );
  }
  get auth(): AuthJwtPayload {
    return JSON.parse(
      window.localStorage.getItem(this.AUTH_KEY)
    );
  }
  set token(token: string) {
    window.localStorage.setItem(
      this.TOKEN_KEY,
      token
    );
  }
  get token() {
    return window.localStorage.getItem(this.TOKEN_KEY);
  }
  checkEmail(email) {
    console.log('user: ', email)
    if (email) {
      return this.http.post(API + '/check', { email })
    } else {
      return of(0)
    }
  }
  signOut() {
    console.log('signout')
    window.localStorage.removeItem(this.AUTH_KEY);
    window.localStorage.removeItem(this.TOKEN_KEY);
  }
}
