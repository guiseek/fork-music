import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from './sidenav.component';
import { SidenavItemComponent } from './sidenav-item/sidenav-item.component';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatRippleModule } from '@angular/material/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { ToggleSidenavDirective } from './toggle-sidenav.directive';

const modules = [
  MatButtonModule,
  MatToolbarModule,
  MatIconModule,
  MatListModule,
  MatRippleModule,
  MatSidenavModule,
  MatTooltipModule,
  FlexLayoutModule
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ...modules
  ],
  declarations: [SidenavComponent, SidenavItemComponent, ToggleSidenavDirective],
  exports: [SidenavComponent, ToggleSidenavDirective]
})
export class SidenavModule {}
