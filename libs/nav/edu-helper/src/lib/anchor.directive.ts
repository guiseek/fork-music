// import { Directive } from '@angular/core';
import { IStepOption } from './helper.service';

// @Directive({
//   selector: '[eduAnchor]'
// })
// export class AnchorDirective {

//   constructor() { }

// }
export interface HelperAnchorDirective {
  showHelperStep(step: IStepOption): void;
  hideHelperStep(): void;
}