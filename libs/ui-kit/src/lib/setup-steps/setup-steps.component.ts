import { Component, OnInit, Input } from '@angular/core';
import { CdkStepper } from '@angular/cdk/stepper';
import { SetupStep } from './setup-step.model';

@Component({
  selector: 'ui-setup-steps',
  templateUrl: './setup-steps.component.html',
  styleUrls: ['./setup-steps.component.scss'],
  // providers: []
  providers: [
    { provide: CdkStepper, useExisting: SetupSteps }
  ]
})
export class SetupSteps extends CdkStepper {
  // @Input() setupSteps: SetupStep[] = []

  onClick(index: number): void {
    this.selectedIndex = index
  }
}
