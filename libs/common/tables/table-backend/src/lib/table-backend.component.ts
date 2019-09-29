import { Component, OnInit, ViewChild, AfterViewInit, Input, EventEmitter, Output, OnDestroy } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { HttpClient } from '@angular/common/http';
import { TableBackendDataSource } from './table-backend-data-source';
import { BehaviorSubject, Subject, Subscription } from 'rxjs';
import { SelectionModel } from '@angular/cdk/collections';
import { debounceTime } from 'rxjs/operators';
import { TableConfig } from '@suite/interfaces';

const DEFAULT_CONFIG = {
  paginator: {
    color: 'primary',
    hidePageSize: false,
    showFirstLastButtons: true
  }
}
@Component({
  selector: 'suite-table-backend',
  exportAs: 'tableBackend',
  templateUrl: './table-backend.component.html',
  styleUrls: ['./table-backend.component.scss']
})
export class TableBackendComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;

  selection = new SelectionModel<any>(true, []);

  @Input() filter: BehaviorSubject<string>
  @Input() refresh: Subject<boolean>

  @Input() selectable: boolean
  @Output() selectionChanged = new EventEmitter()

  @Input() editable: boolean
  @Output() edit = new EventEmitter()

  @Input() deletable: boolean
  @Output() delete = new EventEmitter()

  @Input() select: boolean

  @Input() endpoint: string
  @Input() columns
  displayedColumns = [];

  @Input() config: TableConfig

  dataSource: TableBackendDataSource

  subscriptions: Subscription[] = []
  constructor(
    private http: HttpClient
  ) { }

  editClicked(data) {
    console.table(data)
    this.edit.emit(data)
  }
  ngOnInit() {
    this.config = Object.assign(
      {},
      DEFAULT_CONFIG,
      this.config
    )
    if (!this.refresh) {
      this.refresh = new Subject
    }

    if (!this.filter) {
      this.filter = new BehaviorSubject<string>('')
    }
    this.displayedColumns = this.columns.map(c => c.columnDef);

    if (this.selectable) {
      this.displayedColumns.unshift('select')
    }
    if (this.editable) {
      this.displayedColumns.push('edit')
    }
    if (this.deletable) {
      this.displayedColumns.push('delete')
    }
    this.dataSource = new TableBackendDataSource(this.http)
  }
  ngAfterViewInit() {
    const mutations = {
      refresh: this.refresh,
      // filter: this.filter
    }
    this.dataSource.setup(
      this.endpoint,
      this.paginator,
      this.sort,
      mutations
    )

    console.log('this.selectable: ', this.selectable)
    if (this.selectable) {
      const sub = this.selection.changed.pipe(
        debounceTime(1000)
      ).subscribe((v) => this.selectionChanged.emit(v))

      this.subscriptions.push(
        sub
      )
    }
  }
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data && this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: any): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }
  ngOnDestroy() {
    return this.subscriptions && this.subscriptions.map(s => s.unsubscribe())
  }
}
