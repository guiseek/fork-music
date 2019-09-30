import { Component, OnInit } from '@angular/core';
import { userAccountFormFields, accountBackend } from '@suite/account/shared/resources';
import { HttpDatabaseService } from '@suite/common/core';
import { DialogService } from '@suite/cdk/dialog';
import { UserInGroupComponent, AccountService } from '@suite/account/shared/account';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'suite-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {
  public fields = userAccountFormFields
  constructor(
    private route: ActivatedRoute,
    private database: HttpDatabaseService,
    private dialog: DialogService,
    private account: AccountService
  ) { }

  ngOnInit() {
    console.log('abc', this.route.snapshot.parent.data)
    const req = this.database.crud(
      '/api/account/in-group', {
      fields: ['customerInvoiceData', 'insertTs', 'inGroups', 'typeName'],
      filter: [{
        field: 'customerInvoiceData',
        operator: 'cont',
        value: '1'
      }]
    })
    // req.subscribe((res) => {
    //   console.log('abc: ', res)
    // })

  }
  openGroupDialog() {
    const ref = this.dialog.open(
      UserInGroupComponent, {
      disableClose: true,
      hasBackdrop: true,
      data: {

      }
    }
    )
  }
  add(value) {
    console.log(value)
    this.database.post(
      accountBackend.endpoints.userAccount,
      value
    ).subscribe((res) => {
      console.log(res)
    })
  }
}
