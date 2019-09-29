import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of, EMPTY } from 'rxjs';
import { mergeMap, take } from 'rxjs/operators';
import { IClassroom } from '@suite/interfaces';
import { HttpClient } from '@angular/common/http';
import { classroomResources } from '@suite/data';

@Injectable({
  providedIn: 'root'
})
export class ClassroomResolverService implements Resolve<IClassroom> {
  constructor(
    private http: HttpClient
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IClassroom> | Observable<never> {
    const id = route.paramMap.get('id');
    console.log('classroom: ', id)
    const { endpoint } = classroomResources
    if (id !== 'novo') {
      return this.getClassroom(
        `${endpoint}/${id}`
      )
    } else {
      return EMPTY
    }
  }
  getClassroom(path: string) {
    return this.http.get<IClassroom>(path).pipe(
      take(1),
      mergeMap(classroom => {
        console.log('classroom: ', classroom)
        if (classroom) {
          return of(classroom);
        } else { // id not found
          // this.router.navigate(['/crisis-center']);
          return EMPTY;
        }
      })
    );

  }
}
