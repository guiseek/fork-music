import { Directive, OnInit, OnDestroy, HostBinding, HostListener } from '@angular/core';
import { Subscription } from 'rxjs';
import { NavItem, NavService } from '@suite/nav/navigator';
import { MediaObserver, MediaChange } from '@angular/flex-layout';
import { filter, map } from 'rxjs/operators';

@Directive({
  selector: '[suiteToggleSidenav], [suite-toggle-sidenav], suiteToggleSidenav, suite-toggle-sidenav'
})
export class ToggleSidenavDirective implements OnInit, OnDestroy {
  private mediaSubscription: Subscription
  isMobile = false;

  @HostBinding('class.icon-sidenav')
  get isIconSidenav(): boolean {
    return this.menuService.isIconSidenav;
  }

  @HostBinding('class.collapsed')
  collapsed: boolean;

  currentlyOpen: NavItem[]

  @HostListener('mouseenter')
  onMouseEnter() {
    if (this.isIconSidenav && !this.isMobile) {
      this.collapsed = false;

      this.menuService.currentlyOpen = this.currentlyOpen;
      // this.store.dispatch(new NextCurrentlyOpened(this.currentlyOpen));
      // this.store.dispatch(new SetIconMode(false));
    }
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    if (this.isIconSidenav && !this.isMobile) {
      this.collapsed = true;

      this.currentlyOpen = this.menuService.currentlyOpen;
      this.menuService.currentlyOpen = [];
      // this.store.dispatch(new NextCurrentlyOpened([]));
      // this.store.dispatch(new SetIconMode(true));
    }
  }

  constructor(
    private menuService: NavService,
    private mediaObserver: MediaObserver
  ) { }

  ngOnInit() {
    this.mediaSubscription = this.mediaObserver
      .asObservable()
      .pipe(
        filter((changes: MediaChange[]) => changes.length > 0),
        map((changes: MediaChange[]) => changes[0]),
      )
      .subscribe((change: MediaChange) => {
        this.isMobile = change.mqAlias === 'xs' || change.mqAlias === 'sm';
      });
  }

  ngOnDestroy() {
    this.mediaSubscription.unsubscribe();
  }
}