import { Component, OnInit } from '@angular/core';
import { userAccountFormFields, userGroupDialogFormConfig, userGroupResources, userGroupFormFields, userGroupTypeResources } from '@suite/account/shared/resources';
import { HttpDatabaseService } from '@suite/common/core';
import { DialogService } from '@suite/cdk/dialog';
import { DialogFormComponent } from '@suite/ui-kit';
import { IUserGroupType } from '@suite/interfaces';
import { FormField } from '@suite/common/forms/dynamic-form';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'suite-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  resources = userAccountFormFields
  userGroupResources = userGroupResources
  fields: FormField[]
  constructor(
    private database: HttpDatabaseService,
    private dialog: DialogService
  ) { }

  ngOnInit() {
  }
  openUserGroupForm() {
    return this.dialog.open(
      DialogFormComponent, userGroupDialogFormConfig
    )
  }
  async addUserGroup() {
    if (!this.fields) {
      await this.getTypes().toPromise()
    }

    const sub = this.openUserGroupForm()
      .afterClosed().subscribe((res) => {
        if (res) {
          this.database.post(
            this.userGroupResources.endpoint,
            res
          ).subscribe((result) => {
            if (result) {
              console.log(result)
              // this.refresh.next(true)
              this.userGroupResources.refresh.next(true)
              // this.snack.open(
              //   `${result.name} cadastrado`,
              //   'Fechar', { duration: 3000 }
              // )
            }
          })
        }
        sub.unsubscribe()
      })
  }
  getTypes() {
    return this.database.get<IUserGroupType[]>(
      userGroupTypeResources.endpoint, {}
    )
      .pipe(
        map(this.getTypeOptions),
        tap((fields) => this.fields = fields)
      )
  }
  getTypeOptions(types: IUserGroupType[]): FormField[] {
    return userGroupFormFields
      .map((f) => {
        if (f.name === 'userGroupType') {
          f.options = types.map(({ id, typeName }) => {
            return { value: id, viewValue: typeName }
          })
        }
        return f
      })
  }
  getUserGroupTypes() {
    // this.dialog.open(
    //   DialogTableBackendComponent, {
    //   data: userGroupTypeResources
    // }
    // )
  }
  addUserInGroup() {

    // const ref = this.dialog.open(
    //   DialogFormComponent,
    //   userGroupTypeDialogFormConfig
    // )
    // const sub = ref.afterClosed().subscribe((result) => {
    //   if (result) {
    //     this.saveUserGroupType(result)
    //     sub.unsubscribe()
    //   }
    // })
  }
  saveUserGroupType(value) {
    // this.database.post(
    //   accountBackend.endpoints.userGroupType,
    //   value
    // ).subscribe((res) => {
    //   console.table(res)
    //   this.resources.refresh.next(true)
    // })
  }
}
