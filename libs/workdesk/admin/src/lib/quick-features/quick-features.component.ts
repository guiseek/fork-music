import { Component, OnInit, ViewChildren, QueryList, AfterViewInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';
import { categoryResources, classroomTypeResources, classroomResources } from '@suite/data';
import { HttpDatabaseService } from '@suite/common/core';
import { DialogService, DialogConfig } from '@suite/cdk/dialog';
import { DialogFormComponent } from '@suite/ui-kit';
import { Subject } from 'rxjs';
import { FormField } from '@suite/common/forms/dynamic-form';
import { CardFeature } from '@suite/interfaces';
import { CdkDropList, CdkDragEnter, moveItemInArray } from '@angular/cdk/drag-drop';

const category: CardFeature = categoryResources.card
const classroomType: CardFeature = classroomTypeResources.card
const classroom: CardFeature = classroomResources.card

@Component({
  selector: 'wd-quick-features',
  templateUrl: './quick-features.component.html',
  styleUrls: ['./quick-features.component.scss']
})
export class QuickFeaturesComponent implements OnInit, AfterViewInit {
  // features = [
  //   { ...category, match: { cols: 1, rows: 1 }, defaults: { cols: 1, rows: 1 } },
  //   { ...classroomType, match: { cols: 1, rows: 1 }, defaults: { cols: 1, rows: 1 } },
  //   { ...category, match: { cols: 1, rows: 1 }, defaults: { cols: 1, rows: 2 } },
  //   { ...category, match: { cols: 1, rows: 1 }, defaults: { cols: 1, rows: 1 } }
  // ]
  features = [{

  }]
  cards = [
    { ...classroom, cols: 1, rows: 2 },
    { ...classroomType, cols: 1, rows: 1 },
    { ...category, cols: 1, rows: 1 }
  ]

  // cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
  //   map(({ matches }) => {

  //     return this.features.map(({ defaults, match, ...card }) => {
  //       const crs = matches ? match : defaults
  //       return {
  //         ...card,
  //         ...crs
  //       }
  //     })
  //   })
  // );
  refresh = new Subject
  @ViewChildren(CdkDropList) dropsQuery: QueryList<CdkDropList>
  // shortcuts = ShortcutConfig.get()
  drops: CdkDropList[]

  constructor(
    private breakpointObserver: BreakpointObserver,
    private database: HttpDatabaseService,
    private dialogService: DialogService
  ) { }

  ngOnInit() {
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
  onFlip(e) {
    console.log(e)
  }
  add({ model, ...data }) {
    console.log(data)
    const ref = this.dialogService.open(
      DialogFormComponent, data
    )
    const sub = ref.afterClosed().subscribe(res => {
      console.log(res)
      this.refresh.next(true)
      sub.unsubscribe()
    })
  }
  onRefresh() {
    this.refresh.next(true)
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
}
