import { Component, OnInit } from '@angular/core';
import { HttpDatabaseService } from '@suite/common/core';
import { AuthService } from '@suite/auth/shared/auth';
import { accountBackend } from '@suite/account/shared/resources';

@Component({
  selector: 'suite-account-layout',
  templateUrl: './account-layout.component.html',
  styleUrls: ['./account-layout.component.scss']
})
export class AccountLayoutComponent implements OnInit {

  constructor(
    private auth: AuthService,
    private database: HttpDatabaseService
  ) { }

  ngOnInit() {
    const { id, email } = this.auth.auth
    this.database.get(
      accountBackend.endpoints.userAccount, {
        email
      }
    ).subscribe((res) => {
      console.log(res)
    })
  }

}
