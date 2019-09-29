import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[suiteFlipCard]'
})
export class FlipCardDirective {
  
  constructor(
    public elementRef: ElementRef
  ) { }
}