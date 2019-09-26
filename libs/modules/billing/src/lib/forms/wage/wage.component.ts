import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'suite-wage',
  templateUrl: './wage.component.html',
  styleUrls: ['./wage.component.scss']
})
export class WageComponent implements OnInit {
  @Input() parentForm: FormGroup
  constructor(
    private _fb: FormBuilder
  ) {
    if (!this.parentForm) {
      this.parentForm = this._fb.group({
        id: [],
        name: ['', Validators.required]
      })
    }
  }

  ngOnInit() {
  }
}
