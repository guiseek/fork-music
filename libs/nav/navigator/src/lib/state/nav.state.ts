import { Action, NgxsAfterBootstrap, Selector, State, StateContext } from '@ngxs/store';
import { NavItem } from '../models/nav-item.model';
import { Tree } from '@suite/utils';
import { NavService } from '../services/nav.service';

export class NextCurrentlyOpened {
  static readonly type = '[Nav] Next Currently Opened';
  constructor(public readonly payload: NavItem[]) { }
}

export class SetIconMode {
  static readonly type = '[Nav] SetIconMode';
  constructor(public readonly payload: boolean) { }
}

export class ToggleCurrentlyOpened {
  static readonly type = '[Nav] ToggleCurrentlyOpened';
  constructor(public readonly payload: NavItem) { }
}

export class ToggleCurrentlyOpenedByRoute {
  static readonly type = '[Nav] ToggleCurrentlyOpenedByRoute';
  constructor(public readonly payload: string) { }
}

export interface NavStateModel {
  tree: Tree<NavItem>;
  currentlyOpened: NavItem[];
  iconMode: boolean;
}

/** @dynamic */
@State<NavStateModel>({
  name: 'nav',
  defaults: {
    tree: null,
    currentlyOpened: [],
    iconMode: false,
  },
})
export class NavState implements NgxsAfterBootstrap {
  constructor(private navService: NavService) { }

  @Selector()
  static navItems(state: NavStateModel) {
    return state.tree.root.children;
  }

  @Selector()
  static currentlyOpened(state: NavStateModel) {
    if (state.iconMode) {
      return [];
    } else {
      return state.currentlyOpened;
    }
  }

  ngxsAfterBootstrap({ setState, getState }: StateContext<NavStateModel>) {
    setState({
      tree: this.navService.tree,
      currentlyOpened: [],
      iconMode: false,
    });
  }

  private getParents(tree, item: NavItem): NavItem[] {
    const ancestors = tree.getAllParents(item);
    ancestors.shift();
    return ancestors;
  }

  @Action(SetIconMode)
  setIconMode({ getState, patchState }: StateContext<NavStateModel>, { payload }: SetIconMode) {
    patchState({
      iconMode: payload,
    });
  }

  @Action(NextCurrentlyOpened)
  nextCurrentlyOpened({ getState, patchState }: StateContext<NavStateModel>, { payload }: NextCurrentlyOpened) {
    patchState({
      currentlyOpened: payload,
    });
  }

  @Action(ToggleCurrentlyOpened)
  toggleCurrentlyOpened({ getState, patchState }: StateContext<NavStateModel>, { payload }: ToggleCurrentlyOpened) {
    // tslint:disable:prefer-const
    let { tree, currentlyOpened } = getState();
    const isOpen = currentlyOpened.indexOf(payload) !== -1;

    if (isOpen) {
      if (currentlyOpened.length > 1) {
        currentlyOpened.length = currentlyOpened.indexOf(payload);
      } else {
        currentlyOpened = [];
      }
    } else {
      currentlyOpened = this.getParents(tree, payload);
    }

    patchState({
      currentlyOpened,
    });
  }

  @Action(ToggleCurrentlyOpenedByRoute)
  toggleCurrentlyOpenedByRoute(
    { getState, patchState }: StateContext<NavStateModel>,
    { payload }: ToggleCurrentlyOpenedByRoute,
  ) {
    const { tree } = getState();
    let currentlyOpened: NavItem[] = [];

    const item = tree.findByPredicateBFS(node => {
      return node.link === payload;
    });

    if (item && item.parent) {
      currentlyOpened = this.getParents(tree, item);
    } else if (item) {
      currentlyOpened = [item];
    }

    patchState({
      currentlyOpened,
    });
  }
}
