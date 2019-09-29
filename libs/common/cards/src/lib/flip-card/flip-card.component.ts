import { Component, OnInit, ViewEncapsulation, HostBinding, ContentChildren, QueryList, Renderer2, ElementRef, AfterContentInit, Output, EventEmitter } from '@angular/core';
import { FlipCardDirective } from './flip-card.directive';

@Component({
  selector: 'suite-flip-card',
  exportAs: 'flipCard',
  templateUrl: './flip-card.component.html',
  styleUrls: ['./flip-card.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FlipCardComponent implements AfterContentInit {
  @HostBinding('class.flipped')
  flipped = false;

  @ContentChildren(FlipCardDirective, { descendants: true })
  toggleButtons: QueryList<FlipCardDirective>;

  @Output() flip = new EventEmitter()

  constructor(
    private _elementRef: ElementRef,
    private _renderer: Renderer2
  ) { }

  ngAfterContentInit(): void {
    setTimeout(() => {
      this.toggleButtons.forEach(flipButton => {
        this._renderer.listen(flipButton.elementRef.nativeElement, 'click', (event) => {
          event.preventDefault();
          event.stopPropagation();
          this.toggle();
        });
      });
    });
  }
  toggle(): void {
    const flip = !this.flipped;
    this.flipped = flip;
    this.flip.emit(flip)
  }
}
