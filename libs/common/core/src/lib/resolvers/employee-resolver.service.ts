import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of, EMPTY } from 'rxjs';
import { mergeMap, take } from 'rxjs/operators';
import { IEmployee } from '@suite/interfaces';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeResolverService implements Resolve<IEmployee> {
  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IEmployee> | Observable<never> {
    const id = route.paramMap.get('id');
    console.log('employee: ', id)

    if (id !== 'novo') {
      return this.getEmployee(id)
    } else {
      return EMPTY
    }
  }
  getEmployee(id) {
    return this.http.get<IEmployee>(`/api/employees/${id}`).pipe(
      take(1),
      mergeMap(employee => {
        console.log('employee: ', employee)
        if (employee) {
          return of(employee);
        } else { // id not found
          // this.router.navigate(['/crisis-center']);
          return EMPTY;
        }
      })
    );

  }
}
