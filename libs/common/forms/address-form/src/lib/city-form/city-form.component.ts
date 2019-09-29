import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ViewChildren } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LocationCity } from '@suite/interfaces';
import { Observable } from 'rxjs';
import { startWith, map, filter, switchMap, debounceTime, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { endpoint } from '@suite/data';
import { MatAutocompleteSelectedEvent, MatAutocomplete, MatAutocompleteTrigger } from '@angular/material/autocomplete';
@Component({
  selector: 'suite-city-form',
  templateUrl: './city-form.component.html',
  styleUrls: ['./city-form.component.scss']
})
export class CityFormComponent implements OnInit {
  @Input() placeholder = 'Buscar cidade'
  @Input() parentControl: FormControl
  @Output() valueChange = new EventEmitter<LocationCity>()
  @Input() group: FormGroup
  @Input() field

  filteredOptions: Observable<LocationCity[]>;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    if (!this.parentControl) {
      this.parentControl = new FormControl('')
    }
    if (this.group) {
      console.log(this.group)
      console.log(this.field)
      this.parentControl = this.group.controls[
        this.field.name
      ] as FormControl
    }
    console.log('this.parentControl: ', this.parentControl)
    this.filteredOptions = this.parentControl.valueChanges
      .pipe(
        tap((change) => {
          console.log('change: ', change)
        }),
        startWith(''),
        filter(value => value.length > 2),
        debounceTime(600),
        map(value => typeof value === 'string' ? value : value.name),
        switchMap(value => this.find(value)),
      );
  }

  onClosed() {
    if (this.parentControl.dirty) {
      const { id, name } = this.parentControl.value
      if (!id || !name) {
        this.parentControl.setValue('')
      }
    }
  }
  onSelected({ option }: MatAutocompleteSelectedEvent) {
    this.valueChange.emit(option.value)
  }
  displayFn(city?: LocationCity): string | undefined {
    return city ? city.name : undefined;
  }
  find(name: string = '') {
    return this.http.get<LocationCity[]>(endpoint.location, {
      params: { name, take: '50', relations: 'state' }
    })
  }
}
