import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { NavItem } from '../models/nav-item.model';

import { Tree } from '@suite/utils';
import { NavigationEnd, Router } from '@angular/router';
import { SidenavState } from './../enums/sidenav-state.enum';
import { NAV_ITEMS } from '../symbols';
import { MediaChange, MediaObserver } from '@angular/flex-layout';
import { map, filter } from 'rxjs/operators';

@Injectable()
export class NavService {
  /**
   * Nav Items
   */
  private treePrivate: Tree<NavItem>;

  private itemsPrivate = new BehaviorSubject<NavItem[]>([{ name: 'dummy' }]);

  items$ = this.itemsPrivate.asObservable();

  get items(): NavItem[] {
    return this.itemsPrivate.getValue();
  }

  set items(items: NavItem[]) {
    this.itemsPrivate.next(items);
  }

  // TODO: temp
  get tree(): Tree<NavItem> {
    return this.treePrivate;
  }

  /**
   * Currently Open
   */
  private currentlyOpenPrivate = new BehaviorSubject<NavItem[]>([]);

  currentlyOpen$ = this.currentlyOpenPrivate.asObservable();

  get currentlyOpen(): NavItem[] {
    return this.currentlyOpenPrivate.getValue();
  }

  set currentlyOpen(currentlyOpen: NavItem[]) {
    this.currentlyOpenPrivate.next(currentlyOpen);
  }

  /**
   * SidenavState for Animation
   */
  private sidenavStatePrivate = new BehaviorSubject<SidenavState>(SidenavState.Expanded);

  sidenavState$ = this.sidenavStatePrivate.asObservable();

  get sidenavState() {
    return this.sidenavStatePrivate.getValue();
  }

  set sidenavState(sidenavState: SidenavState) {
    this.sidenavStatePrivate.next(sidenavState);
  }
  isIconSidenav: boolean;
  isLowerThanLarge: boolean;

  constructor(@Inject(NAV_ITEMS) private navItems: NavItem[], private router: Router, mediaObserver: MediaObserver) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.setCurrentlyOpenByRoute(event.url);

        if (this.isLowerThanLarge) {
          // Close Sidenav on Mobile after Route Change
          this.sidenavState = SidenavState.Mobile;
        }
      }
    });

    // mediaObserver.media$

    mediaObserver.asObservable()
      .pipe(
        filter((changes: MediaChange[]) => changes.length > 0),
        map((changes: MediaChange[]) => changes[0]),
        map((change: MediaChange) => change.mqAlias === 'xs' || change.mqAlias === 'sm' || change.mqAlias === 'md')
      ).subscribe((isLowerThanLarge) => {
        this.isLowerThanLarge = isLowerThanLarge;
        if (
          isLowerThanLarge &&
          !(this.sidenavState === SidenavState.Mobile || this.sidenavState === SidenavState.MobileOpen)
        ) {
          this.sidenavState = SidenavState.Mobile;
        } else if (!isLowerThanLarge) {
          this.sidenavState = SidenavState.Expanded;
        }

        // this.activeMediaQuery = change ? `'${change.mqAlias}' = (${change.mediaQuery})` : '';
        // if (change.mqAlias == 'xs') {
        //   this.loadMobileContent();
        // }
      });
    // mediaObserver.media$
    //   .pipe(map((change: MediaChange) => change.mqAlias === 'xs' || change.mqAlias === 'sm' || change.mqAlias === 'md'))
    //   .subscribe(isLowerThanLarge => {
    //     this.isLowerThanLarge = isLowerThanLarge;
    //     if (
    //       isLowerThanLarge &&
    //       !(this.sidenavState === SidenavState.Mobile || this.sidenavState === SidenavState.MobileOpen)
    //     ) {
    //       this.sidenavState = SidenavState.Mobile;
    //     } else if (!isLowerThanLarge) {
    //       this.sidenavState = SidenavState.Expanded;
    //     }
    //   });

    // sets defaultNav as default;
    // this.publishNavChange('default-nav');
    this.treePrivate = new Tree<NavItem>({ name: 'root', children: navItems });
    this.itemsPrivate.next(this.treePrivate.root.children);
  }

  isOpen(item: NavItem) {
    return this.currentlyOpen.indexOf(item) !== -1;
  }

  toggleItemOpen(item: NavItem) {
    let currentlyOpen = this.currentlyOpen;

    if (this.isOpen(item)) {
      if (currentlyOpen.length > 1) {
        currentlyOpen.length = this.currentlyOpen.indexOf(item);
      } else {
        currentlyOpen = [];
      }
    } else {
      currentlyOpen = this.getParents(item);
    }

    this.currentlyOpen = currentlyOpen;
  }

  // private setCurrentlyOpenByRoute(route: string) {
  public setCurrentlyOpenByRoute(route: string) {
    const item = this.treePrivate.findByPredicateBFS(node => {
      return node.link === route;
    });
    let currentlyOpen = [];

    if (item && item.parent) {
      currentlyOpen = this.getParents(item);
    } else if (item) {
      currentlyOpen = [item];
    }

    this.currentlyOpen = currentlyOpen;
  }

  getItemByRoute(route: string) {
    return this.treePrivate.findByPredicateBFS(node => {
      return node.link === route;
    });
  }

  private getParents(item: NavItem): NavItem[] {
    const ancestors = this.treePrivate.getAllParents(item);
    ancestors.shift();
    return ancestors;
  }

  // Customizer component uses this method to change nav.
  // Or you can customize this method to supply different nav for
  // different user type.
  // publishNavChange(navType: string) {
  //   let navItems;
  //   switch (navType) {
  //     case 'admin-nav':
  //       navItems = adminNav;
  //       break;
  //     case 'demo-nav':
  //       navItems = demoNav;
  //       break;
  //     default:
  //       navItems = defaultNav;
  //   }
  //
  //   this._tree = new Tree<NavItem>({ name: 'root', children: navItems });
  //   this._items.next(this._tree.root.children);
  // }
}
