import { Component, OnInit, HostBinding, Input, ElementRef } from '@angular/core';

@Component({
  selector: 'ui-win',
  exportAs: 'uiWin',
  template: `
    <svg id="el_DgJKV7bDz" viewBox="0 0 188 188">
      <g
        id="el_ywoFgc3z8L_an_quP4_sMKF"
        data-animator-group="true"
        data-animator-type="0"
      >
        <g id="el_ywoFgc3z8L">
          <g id="el_U4GL4DmuDU">
            <path
              id="el_D0nQLxyZoy"
              d="M45.81 64.55s-14.3 19.55 0 27.18 37.19-27.18 41-40-23.68 82.48-23.68 82.48l37.5-61-11.44 61S112.55 65 140.68 69.79"
            ></path>
            <path
              id="el__DuQl1Knlr"
              d="M46.78 63.13a52.21 52.21 0 1 1-8.92 29.19"
            ></path>
          </g>
          <path
            id="el_1atIkjIkjN"
            d="M118.19 109.65s-13 25.64-1.9 21.17 16.41-21.17 16.41-21.17l-6.92 21.69s8.14-22.51 19.13-21.69 1.22 15.47 1.22 15.47-22.12 35.41 4 17.91"
          ></path>
          <g
            id="el_KhXmGIekh__an_gic2CSjqo"
            data-animator-group="true"
            data-animator-type="2"
          >
            <circle id="el_KhXmGIekh_" cx="123.96" cy="97.48" r="5.16"></circle>
          </g>
        </g>
      </g>
    </svg>
  `,
  styleUrls: ['./win.component.scss']
})
export class WinComponent implements OnInit {
  @HostBinding('class') class = 'fm-win'
  @Input()
  color: string;
  private elementRef: HTMLElement
  constructor(
    private element: ElementRef
  ) {
    this.elementRef = this.element.nativeElement
  }
  public toggle() {
    this.elementRef.classList.toggle('animate')
  }
  public start() {
    this.elementRef.classList.add('animate')
  }
  public stop() {
    this.elementRef.classList.remove('animate')
  }
  ngOnInit() {
    if (this.color) {
      const svg = this.elementRef.querySelector<SVGElement>('svg')
      svg.querySelectorAll('path').forEach((path) => {
        console.log(path)
        path.style.stroke = this.color
      })
    }
  }
}
