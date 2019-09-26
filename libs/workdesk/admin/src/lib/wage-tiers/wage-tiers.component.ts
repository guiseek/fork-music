import { Component, OnInit, ViewChild, AfterViewInit, TemplateRef } from '@angular/core';
import { HttpDatabaseService } from '@suite/common/core';
import { IWageTier } from '@suite/interfaces';
import { MatPaginator, MatSort, MatDialog } from '@angular/material';
import { merge, of, Subject, BehaviorSubject } from 'rxjs';
import { startWith, switchMap, map, catchError } from 'rxjs/operators';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

const ENDPOINT = '/api/wage-tiers'

@Component({
  selector: 'wd-wage-tiers',
  templateUrl: './wage-tiers.component.html',
  styleUrls: ['./wage-tiers.component.scss']
})
export class WageTiersComponent implements AfterViewInit {

  // columns = ['id', 'name', 'actions']
  data: IWageTier[] = [];

  columns = [
    { columnDef: 'id', header: 'No.', cell: (element: any) => `${element.id}` },
    { columnDef: 'name', header: 'Name', cell: (element: any) => `${element.name}` },
    // { columnDef: 'weight', header: 'Weight', cell: (element: any) => `${element.weight}` },
    // { columnDef: 'symbol', header: 'Symbol', cell: (element: any) => `${element.symbol}` },
  ];
  displayedColumns = this.columns.map(c => c.columnDef);

  resultsLength = 0;
  isLoadingResults = true;
  isRateLimitReached = false;

  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;

  refresh = new Subject
  filter = new BehaviorSubject<string>('')

  @ViewChild('formTemplate', { static: true }) dialogForm: TemplateRef<HTMLElement>
  wageForm: FormGroup

  search = new FormControl
  constructor(
    private database: HttpDatabaseService,
    private dialog: MatDialog,
    private _fb: FormBuilder
  ) {
    this.wageForm = this._fb.group({
      id: [],
      name: ['', Validators.required]
    })
  }
  applyFilter(value = '') {
    this.filter.next(value)
  }
  add() {
    const ref = this.dialog.open(
      this.dialogForm, {
        data: { name: 'oi' }
      }
    )
    const sub = ref.afterClosed().subscribe((value) => {
      console.log(value)
      if (value) {
        this.save(value)
      }
      sub.unsubscribe()
    })
  }
  ngAfterViewInit() {
    console.log('dialogForm: ', this.dialogForm)
    // this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0)

    // merge(
    //   this.sort.sortChange,
    //   this.paginator.page,
    //   this.refresh
    // ).pipe(
    //   startWith({}),
    //   switchMap(() => {
    //     this.isLoadingResults = true
    //     const { active, direction } = this.sort
    //     return this.database.get('/api/wage-tiers', {
    //       sort: `${active},${direction.toUpperCase()}`,
    //       page: this.paginator.pageIndex + 1,
    //       per_page: 2
    //     })
    //   }),
    //   map(response => {
    //     this.isLoadingResults = false;
    //     this.isRateLimitReached = false;
    //     this.resultsLength = response.total;
    //     return response.data
    //   }),
    //   catchError(() => {
    //     this.isLoadingResults = false;
    //     // Catch if the GitHub API has reached its rate limit. Return empty data.
    //     this.isRateLimitReached = true;
    //     return of([]);
    //   })
    // ).subscribe(data => this.data = data);
  }
  save(value: IWageTier) {
    const sub = this.database.post(ENDPOINT, value)
      .subscribe((res) => {
        console.log(res)
        this.refresh.next()
        sub.unsubscribe()
      })
  }
}
