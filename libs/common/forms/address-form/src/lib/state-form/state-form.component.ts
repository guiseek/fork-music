import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { LocationState } from '@suite/interfaces';
import { Observable } from 'rxjs';
import { startWith, map, filter } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { endpoint } from '@suite/data';

@Component({
  selector: 'suite-state-form',
  templateUrl: './state-form.component.html',
  styleUrls: ['./state-form.component.scss']
})
export class StateFormComponent implements OnInit {
  @Input() parentControl: FormControl
  states: LocationState[] = []
  filteredOptions: Observable<LocationState[]>;
  constructor(
    private http: HttpClient
  ) {
  }
  onFocus() {
    if (!this.states.length) {
      this.http.get(endpoint.states)
        .toPromise()
        .then((states: LocationState[]) => {
          this.states = states
          console.log(states)
        })
    }
  }
  onClosed() {
    if (this.parentControl.dirty) {
      const { id, name } = this.parentControl.value
      if (!id || !name) {
        this.parentControl.setValue('')
      }
    }
  }
  ngOnInit() {
    console.log('this.parentControl: ', this.parentControl)
    this.filteredOptions = this.parentControl.valueChanges
      .pipe(
        startWith(''),
        filter(value => value.length > 2),
        map(value => typeof value === 'string' ? value : value.name),
        map(name => name ? this._filter(name) : this.states.slice())
      );
  }
  displayFn(city?: LocationState): string | undefined {
    return city ? city.name : undefined;
  }
  private _filter(name: string): LocationState[] {
    const filterValue = name.toLowerCase();

    return this.states.filter(option => option.name.toLowerCase().indexOf(filterValue) === 0);
  }
}
