import { Component, OnInit } from '@angular/core';
import { DialogService } from '@suite/cdk/dialog';
import { DialogTableBackendComponent, DialogFormComponent } from '@suite/ui-kit';
import { userGroupTypeResources, userGroupTypeFormFields, userGroupTypeDialogFormConfig, accountBackend } from '@suite/account/shared/resources';
import { HttpDatabaseService } from '@suite/common/core';

@Component({
  selector: 'suite-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.scss']
})
export class GroupsComponent implements OnInit {
  resources = userGroupTypeResources
  resourceSelected = {
    user: {
      // dialog: userAc
    }
  }
  constructor(
    private database: HttpDatabaseService,
    private dialog: DialogService
  ) { }

  ngOnInit() {
  }
  getUserGroupTypes() {
    this.dialog.open(
      DialogTableBackendComponent, {
        data: userGroupTypeResources
      }
    )
  }
  createUserGroupType() {
    const ref = this.dialog.open(
      DialogFormComponent,
      userGroupTypeDialogFormConfig
    )
    const sub = ref.afterClosed().subscribe((result) => {
      if (result) {
        this.saveUserGroupType(result)
        sub.unsubscribe()
      }
    })
  }
  saveUserGroupType(value) {
    this.database.post(
      accountBackend.endpoints.userGroupType,
      value
    ).subscribe((res) => {
      console.table(res)
      this.resources.refresh.next(true)
    })
  }
}
