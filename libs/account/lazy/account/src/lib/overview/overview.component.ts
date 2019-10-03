import { Component, OnInit, ViewChildren, QueryList, AfterViewInit } from '@angular/core';
import { userAccountFormFields, accountBackend } from '@suite/account/shared/resources';
import { HttpDatabaseService } from '@suite/common/core';
import { DialogService } from '@suite/cdk/dialog';
import { UserInGroupComponent, AccountService } from '@suite/account/shared/account';
import { ActivatedRoute } from '@angular/router';
import { CardFeature } from '@suite/interfaces';
import { instructorResources, categoryResources, classroomTypeResources, classroomResources } from '@suite/data';
import { CdkDropList, moveItemInArray, CdkDragEnter } from '@angular/cdk/drag-drop';

const instructor: CardFeature = instructorResources.card
const category: CardFeature = categoryResources.card
const classroomType: CardFeature = classroomTypeResources.card
const classroom: CardFeature = classroomResources.card

@Component({
  selector: 'suite-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit, AfterViewInit {
  public fields = userAccountFormFields
  cards = [
    { ...instructor, cols: 1, rows: 1 },
    { ...classroom, cols: 1, rows: 2 },
    { ...classroomType, cols: 1, rows: 1 },
    { ...category, cols: 1, rows: 1 }
  ]
  @ViewChildren(CdkDropList) dropsQuery: QueryList<CdkDropList>
  // shortcuts = ShortcutConfig.get()
  drops: CdkDropList[]

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
  onSubmit(value, { endpoint, refresh }, fc) {
    console.log(value, endpoint, refresh, fc)
    if (value) {
      this.database.post(
        endpoint, value
      ).subscribe((res) => {
        console.table(res)
        refresh.next(true)
        fc.toggle()
      })
    }
  }
  onFlip(data) {
    console.log(data)
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
