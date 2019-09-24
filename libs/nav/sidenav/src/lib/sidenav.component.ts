import { Component, OnInit, ChangeDetectorRef, OnDestroy, ViewEncapsulation, Inject } from '@angular/core';
import { Subject } from 'rxjs';
import { NavItem, NavService } from '@suite/nav/navigator';
import { Router, NavigationEnd } from '@angular/router';
import { untilDestroy } from '@suite/utils';
import { WINDOW } from '@suite/common/core';

@Component({
  selector: 'suite-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SidenavComponent implements OnInit, OnDestroy {
  private destroyed$ = new Subject<void>();

  items: NavItem[];

  constructor(
    private router: Router,
    private navService: NavService,
    // private snackBar: MatSnackBar,
    private cd: ChangeDetectorRef,
    // @Inject(WINDOW) private window: Window,
  ) { }

  ngOnInit() {
    this.navService.items$.pipe(untilDestroy(this)).subscribe((items: NavItem[]) => {
      this.items = items;
    });
    this.router.events.pipe(untilDestroy(this))
      .subscribe(event => {
        if (event instanceof NavigationEnd) {
          this.navService.setCurrentlyOpenByRoute(event.url);
          console.log('event.url: ', event.url)
          // setTimeout(() => {
          //   window.dispatchEvent(new Event('resize'));
          // }, 400);
          this.cd.markForCheck();
        }
      });
  }
  toggleIconSidenav() {
    // setTimeout(() => {
    //   this.window.dispatchEvent(new Event('resize'));
    // }, 300);

    this.navService.isIconSidenav = !this.navService.isIconSidenav;

    // const snackBarConfig: MatSnackBarConfig = {
    //   duration: 10000,
    // } as MatSnackBarConfig;

    if (this.navService.isIconSidenav) {
      console.log('Mova o mouse para o conteúdo.')
      // this.snackBar.open(
      //   'Mova o mouse para o conteúdo.',
      //   '',
      //   snackBarConfig,
      // );
    }
  }

  isIconSidenav(): boolean {
    return this.navService.isIconSidenav;
  }

  ngOnDestroy() {
    
  }
}
