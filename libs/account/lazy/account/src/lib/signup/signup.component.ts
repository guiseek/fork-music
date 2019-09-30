import { Component, OnInit } from '@angular/core';
import { HttpDatabaseService } from '@suite/common/core';
import { Observable } from 'rxjs';
import { IUserGroupType } from '@suite/interfaces';
import { userGroupTypeResources, createUserAccountFormFields } from '@suite/account/shared/resources';
import { FormField } from '@suite/common/forms/dynamic-form';
import { map, tap, delay } from 'rxjs/operators';

@Component({
  selector: 'account-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  groupTypes$: Observable<IUserGroupType[]>
  // fields: FormField[]
  fields$: Observable<FormField[]>
  constructor(
    private database: HttpDatabaseService
  ) { }

  ngOnInit() {
    // const createUserGroup
    this.fields$ = this.database.req(
      userGroupTypeResources.endpoint
    ).pipe(
      delay(2000),
      map((types) => {
        return createUserAccountFormFields.map((f) => {
          if (f.name === 'userGroupType') {
            f.options = types.map(({ id, typeName, membersMin, membersMax }) => {
              console.log(id, typeName)
              return {
                value: id,
                viewValue: `${typeName} - ${membersMin} ~ ${membersMax}`
              }
            })
          }
          return f
        })
      }),
      tap((res) => {
        console.log(res)
      })
    )
  }

}
