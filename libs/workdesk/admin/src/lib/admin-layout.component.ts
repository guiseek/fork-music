import { Component, OnInit } from '@angular/core';
import { trigger, transition, query, animate, style } from '@angular/animations';

@Component({
  selector: 'wd-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss'],
  animations: [
    trigger('fadeAnimation', [
      transition('* => *', [
        query(':enter',
          [
            style({ opacity: 0 })
          ],
          { optional: true }
        ),
        query(':leave',
          [
            style({ opacity: 1 }),
            animate('0.5s', style({ opacity: 0 }))
          ],
          { optional: true }
        ),
        query(':enter',
          [
            style({ opacity: 0 }),
            animate('0.5s', style({ opacity: 1 }))
          ],
          { optional: true }
        )
      ])
    ])
  ]
})
export class AdminLayoutComponent implements OnInit {
  sidenavOpen = true;
  sidenavMode = 'over';

  constructor() { }

  ngOnInit() {
  }
  public getRouterOutletState(outlet) {
    return outlet.isActivated ? outlet.activatedRoute : '';
  }
}
