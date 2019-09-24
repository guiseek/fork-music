import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavItem } from './models/nav-item.model';
import { NavService } from './services/nav.service';
import { NAV_ITEMS } from './symbols';

@NgModule({
  imports: [CommonModule]
})
export class NavigatorModule {
  static forRoot(navItems: NavItem[]): ModuleWithProviders {
    return {
      ngModule: NavigatorModule,
      providers: [NavService, { provide: NAV_ITEMS, useValue: navItems }],
    };
  }
}
