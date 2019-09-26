import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonService } from '@suite/common/core';
import { MatPaginator, MatSort } from '@angular/material';
import { Observable, merge, of } from 'rxjs';
import { startWith, switchMap, map, catchError } from 'rxjs/operators';

@Component({
  selector: 'wd-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit, AfterViewInit {

  address: any = {}
  addressForm: FormGroup
  
  displayedColumns: string[] = ['id', 'state', 'city', 'street_address'];
  exampleDatabase: AddressHttpDatabase | null;
  data: Address[] = [];

  resultsLength = 0;
  isLoadingResults = true;
  isRateLimitReached = false;

  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;

  constructor(
    private _fb: FormBuilder,
    private service: CommonService
  ) {
    this.addressForm = this._fb.group({
      neighborhood: ['', Validators.required],
      streetAddress: ['', Validators.required],
      streetNumber: ['', Validators.required],
      zip: [],
      state: ['', Validators.required],
      city: ['', Validators.required]
    })
  }

  ngOnInit() {
  }
  ngAfterViewInit() {
    this.exampleDatabase = new AddressHttpDatabase(this.service);

    // If the user changes the sort order, reset back to the first page.
    this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);

    merge(this.sort.sortChange, this.paginator.page)
      .pipe(
        startWith({}),
        switchMap(() => {
          this.isLoadingResults = true;
          return this.exampleDatabase!.getAddress(
            this.sort.active, this.sort.direction, this.paginator.pageIndex);
        }),
        map(response => {
          // Flip flag to show that loading has finished.
          this.isLoadingResults = false;
          this.isRateLimitReached = false;
          this.resultsLength = response.total;

          return response.data;
        }),
        catchError(() => {
          this.isLoadingResults = false;
          // Catch if the GitHub API has reached its rate limit. Return empty data.
          this.isRateLimitReached = true;
          return of([]);
        })
      ).subscribe(data => this.data = data);
  }
  get city() {
    return this.addressForm.get('city')
  }
  onCityChanged({ state, ...city }) {
    console.table(city)
    this.addressForm.patchValue({
      state, city
    })
  }
  onAddressByZipChanged(response) {
    const {
      id, city, state,
      ...address
    } = response
    this.addressForm.patchValue({
      ...address
    })
  }
  onSubmit() {
    this.addressForm.markAllAsTouched()
    this.service.post('api/address', this.addressForm.value)
      .subscribe((res) => {
        console.log(res)
      })
  }
  onAddressChanged(address) {
    console.table(address)
  }
}

export interface AddressApi {
  data: Address[];
  total: number;
}

export interface Address {
  id: number;
  street_address: string;
  zip: string;
  state: any;
  city: any;
}
export class AddressHttpDatabase {
  constructor(private _service: CommonService) { }

  getAddress(sort: string = 'id', order: string, page: number): Observable<AddressApi> {
    const href = '/api/address';
    const requestUrl =
      `${href}?sort=${sort},${order.toUpperCase()}&page=${page + 1}&per_page=1`;

    return this._service.get<AddressApi>(requestUrl);
  }
}