import { Component, OnInit, ViewChildren, QueryList, AfterViewInit } from '@angular/core';
import { HttpDatabaseService } from '@suite/common/core';
// import { AuthService } from '@suite/auth/shared/auth';
import { accountBackend } from '@suite/account/shared/resources';
import { AuthService } from '@suite/account/shared/auth';
import { CardFeature } from '@suite/interfaces';
import { categoryResources, classroomTypeResources, classroomResources } from '@suite/data';
import { CdkDropList, CdkDragEnter, moveItemInArray } from '@angular/cdk/drag-drop';

const category: CardFeature = categoryResources.card
const classroomType: CardFeature = classroomTypeResources.card
const classroom: CardFeature = classroomResources.card

@Component({
  selector: 'suite-account-layout',
  templateUrl: './account-layout.component.html',
  styleUrls: ['./account-layout.component.scss']
})
export class AccountLayoutComponent implements OnInit, AfterViewInit {
  cards = [
    { ...classroom, cols: 1, rows: 2 },
    { ...classroomType, cols: 1, rows: 1 },
    { ...category, cols: 1, rows: 1 }
  ]
  @ViewChildren(CdkDropList) dropsQuery: QueryList<CdkDropList>
  // shortcuts = ShortcutConfig.get()
  drops: CdkDropList[]

  constructor(
    private auth: AuthService,
    private database: HttpDatabaseService
  ) { }

  ngOnInit() {
    this.auth.me()
      .subscribe((res) => {
        console.log(res)
      })
    // const { id, email } = this.auth.auth
    // this.database.get(
    //   accountBackend.endpoints.userAccount, {
    //     email
    //   }
    // ).subscribe((res) => {
    //   console.log(res)
    // })
  }
  ngAfterViewInit() {
    this.dropsQuery.changes.subscribe(() => {
      this.drops = this.dropsQuery.toArray()
    })
    Promise.resolve().then(() => {
      this.drops = this.dropsQuery.toArray();
    })
  }
  entered($event: CdkDragEnter) {
    moveItemInArray(this.cards, $event.item.data, $event.container.data);
    // ShortcutConfig.set(this.shortcuts)
  }

  getCardFromFeature({ card }) {
    return card
  }
}
