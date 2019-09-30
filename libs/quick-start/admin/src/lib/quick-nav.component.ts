import { Component, OnInit, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { SetupStep } from '@suite/ui-kit';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpDatabaseService } from '@suite/common/core';
import { categoryResources } from '@suite/data';
import { SetupSteps } from '@suite/ui-kit';
// import { SetupSteps } from 'libs/ui-kit/src/lib/setup-steps/setup-steps.component';

@Component({
  selector: 'quick-nav',
  templateUrl: './quick-nav.component.html',
  styleUrls: ['./quick-nav.component.scss']
})
export class QuickNavComponent implements OnInit {
  steps: SetupStep[] = [{
    completed: false,
    label: 'Categorias',
    hasError: false,
    optional: true,
    data: categoryResources.formFields
  }, {
      completed: false,
      label: 'Categorias',
      hasError: false,
      optional: true,
      data: categoryResources.tableConfig
    }]
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  @ViewChild(SetupSteps, { static: true }) stepper: SetupSteps
  constructor(
    private _fb: FormBuilder,
    private database: HttpDatabaseService,
    private breakpointObserver: BreakpointObserver
  ) {}
  ngOnInit() {
    console.log(this.stepper)
    this.firstFormGroup = this._fb.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._fb.group({
      secondCtrl: ['', Validators.required]
    });
  }
  changeStep(step) {
    console.log(step)
  }
  onSubmit(data) {
    console.table(data)
    // this.stepper.
  }
}
