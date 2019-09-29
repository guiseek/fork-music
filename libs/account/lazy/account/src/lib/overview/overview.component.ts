import { Component, OnInit } from '@angular/core';
import { userAccountFormFields, accountBackend } from '@suite/account/shared/resources';
import { HttpDatabaseService } from '@suite/common/core';
import { DialogService } from '@suite/cdk/dialog';

@Component({
  selector: 'suite-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {
  public fields = userAccountFormFields
  constructor(
    private database: HttpDatabaseService,
    private dialog: DialogService
  ) { }

  ngOnInit() {
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
