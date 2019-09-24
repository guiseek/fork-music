import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { MenuItemComponent } from './menu-item/menu-item.component';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { PortalModule } from '@angular/cdk/portal';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { MatMenuModule } from '@angular/material';

const modules = [
  CommonModule,
  PortalModule,
  FlexLayoutModule.withConfig({ useColumnBasisZero: false }),
  RouterModule,
  ReactiveFormsModule,
  MatToolbarModule,
  MatButtonModule,
  MatIconModule,
  MatFormFieldModule,
  MatInputModule,
  MatListModule,
  MatMenuModule
];

@NgModule({
  imports: [
    ...modules
  ],
  declarations: [ToolbarComponent, SearchbarComponent, MenuBarComponent, MenuItemComponent],
  exports: [ToolbarComponent, SearchbarComponent, MenuBarComponent, MenuItemComponent]
})
export class ToolbarModule {}
