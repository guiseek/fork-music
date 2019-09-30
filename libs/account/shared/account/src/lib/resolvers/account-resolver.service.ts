import { Injectable } from '@angular/core';
import { IUserAccount } from '@suite/interfaces';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AccountService } from '../services/account.service';
import { Observable, EMPTY } from 'rxjs';
import { AuthService } from '@suite/auth/shared/auth';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AccountResolverService implements Resolve<IUserAccount> {
  constructor(
    private router: Router,
    private auth: AuthService,
    private service: AccountService
  ) { }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<IUserAccount> | Observable<never> {
    // const id = route.paramMap.get('id');
    
    console.log('classroom: ', this.auth.auth)
    const { id } = this.auth.auth
    console.log('classroom: ', id)
    // const { endpoint } = accountBackend.endpoints.userAccount
    if (id !== 'novo') {
      return this.service.resolve(
        id
      ).pipe(
        map((account) => {
          console.log('account: ', !!account)
          if (!!account) {
            this.router.navigate(['/up'])
            return account
          }
        })
      )
    } else {
      this.router.navigate(['/up'])
      return EMPTY
    }
  }
}
