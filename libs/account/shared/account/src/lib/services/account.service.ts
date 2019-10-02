import { Injectable } from '@angular/core';
// import { AuthService } from '@suite/auth/shared/auth';
import { IUserAccount, AuthJwtPayload } from '@suite/interfaces';
import { HttpClient } from '@angular/common/http';
import { accountBackend } from '@suite/account/shared/resources';
import { HttpDatabaseService } from '@suite/common/core';
import { CreateQueryParams } from '@nestjsx/crud-request';
import { Router } from '@angular/router';
// import { environment } from '@env/backend/environment';
import { catchError, map, tap } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { environment } from '@env/customer/environment';
import { AuthService } from '@suite/account/shared/auth';

const endpoint = `${environment}/auth`

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  account: IUserAccount
  private _auth: any
  constructor(
    private auth: AuthService,
    private http: HttpClient,
    private router: Router,
    private database: HttpDatabaseService
  ) {
    // const env = environment
  }
  
  register(data: IUserAccount) {
    return this.http.post('/api/account/user-account', data)
  }
  check(data) {
    return this.auth.email(data)
  }
  getGroupTypes() {
    return this.database.get(
      '/api/account/user-group-type', {}
    )
  }
  up(data: IUserAccount) {
    return this.database.send<IUserAccount>(
      accountBackend.endpoints.userAccount,
      data
    ).pipe(
      catchError(({error}) => throwError(error)),
      map((response) => {
        console.log(response)
        return response
        // this.router.navigate(['/auth','confirm', response])
      }),
      tap(({confirmationCode}) => {
        this.router.navigate(['/auth', 'confirm', confirmationCode])
      })
    )
  }
  verifyEmail(email) {
    return this.database.post(
      '/api/auth/email', { email }
    )
  }
  confirm(code: string | number) {
    return this.database.get(
      `${accountBackend.endpoints.userAccount}/confirmation/${code}`,
      { }
    )
  }
  sign(data: IUserAccount) {
    return this.database.send(
      '/api/auth', data
    )
  }
  in(data: IUserAccount) {
    return this.database.send<IUserAccount>(
      `${accountBackend.endpoints.userAccount}`,
      data
    ).pipe(
      catchError(({ error }) => throwError(error)),
      map((response) => {
        console.log(response)
        return response
        // this.router.navigate(['/auth','confirm', response])
      }),
      // tap(({ confirmationCode }) => {
      //   this.router.navigate(['/auth', 'confirm', confirmationCode])
      // })
    )
  }
  getAccount(auth: AuthJwtPayload) {
    return this.http.get<IUserAccount>(
      accountBackend.endpoints.userAccount,
      { params: { email: auth.email, id: auth.id } }
    )
  }
  resolve(id: string) {
    // const queryString = RequestQueryBuilder.create()
    const query: CreateQueryParams = {
      filter: [{
        field: 'id',
        operator: 'eq',
        value: id
      }]
    }
    // queryString.setFilter({
    //   field: 'id',
    //   operator: 'eq',
    //   value: id
    // })
    return this.database.crud<IUserAccount>(
      accountBackend.endpoints.userAccount,
      query
    )
      // .pipe(
      //   map((userAccount: IUserAccount) => {
      //     if (userAccount.confirmationTime) {
      //       return userAccount
      //     }
      //     return EMPTY
      //   })
      // )
  }
}
