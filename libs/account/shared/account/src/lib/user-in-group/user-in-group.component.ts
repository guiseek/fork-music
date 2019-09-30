import { Component, OnInit } from '@angular/core';
import { HttpDatabaseService } from '@suite/common/core';
import { accountBackend } from '@suite/account/shared/resources';
import { forkJoin, Observable } from 'rxjs';
import { mergeMap, mergeMapTo, map } from 'rxjs/operators';
import { DialogService } from '@suite/cdk/dialog';

@Component({
  selector: 'account-user-in-group',
  templateUrl: './user-in-group.component.html',
  styleUrls: ['./user-in-group.component.scss']
})
export class UserInGroupComponent implements OnInit {
  features$: Observable<any>
  constructor(
    private database: HttpDatabaseService,
    private dialog: DialogService
  ) { }

  ngOnInit() {
    const requests = []
    const endpoints = [
      accountBackend.endpoints.userGroup,
      accountBackend.endpoints.userAccount,
      accountBackend.endpoints.userGroupType
    ]
    
    endpoints.forEach((endpoint) => {
      requests.push(
        this.database.get(endpoint, {})
      )
    })
    const features = {
      'userGroups': [],
      'userAccounts': [],
      'userGroupTypes': []
    }
    this.features$ = forkJoin(requests).pipe(
      map((res, idx) => {
        console.log(idx, features)
        Object.keys(features).map((key, i) => {
          features[key] = res[i]
        })
        // features[idx] = res
        return features
      })
    )
  }
  openDialog() {
    const ref = this.dialog
  }
}
