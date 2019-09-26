import { Component, OnInit, ViewChild, AfterViewInit, Input, EventEmitter, Output } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { HttpClient } from '@angular/common/http';
import { TableBackendDataSource } from './table-backend-data-source';
import { merge, BehaviorSubject, Subject } from 'rxjs';
import { startWith } from 'rxjs/operators';

@Component({
  selector: 'suite-table-backend',
  templateUrl: './table-backend.component.html',
  styleUrls: ['./table-backend.component.scss']
})
export class TableBackendComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;

  @Input() filter: BehaviorSubject<string>
  @Input() refresh: Subject<boolean>
  @Input() editable: boolean
  @Output() edit = new EventEmitter()

  @Input() deletable: boolean
  @Output() delete = new EventEmitter()

  @Input() select: boolean

  @Input() endpoint: string
  @Input() columns
  displayedColumns = [];

  // columns = ['id', 'name', 'actions']
  dataSource: TableBackendDataSource
  resultsLength
  constructor(
    private http: HttpClient
  ) { 
    console.log('columns: ', this.columns)
  }

  editClicked(data) {
    console.table(data)
    this.edit.emit(data)
  }
  ngOnInit() {
    if (!this.filter) {
      this.filter = new BehaviorSubject<string>('')
    }
    console.log('columns: ', this.columns)
    console.log('endpoint: ', this.endpoint)
    this.displayedColumns = this.columns.map(c => c.columnDef);
    console.log('this.edit: ', this.edit)
    if (this.editable) {
      this.displayedColumns.push('edit')
    }
    if (this.deletable) {
      this.displayedColumns.push('delete')
    }
    this.dataSource = new TableBackendDataSource(this.http)
  }
  ngAfterViewInit() {
    // console.log('endpoint: ', this.endpoint)
    // this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0)
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
    // this.dataSource.load('', 'id')
    // merge(
    //   this.sort.sortChange,
    //   this.paginator.page
    // ).pipe(
    //   startWith({})
    // )
  }
}
