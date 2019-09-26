import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  MatToolbarModule,
  MatIconModule,
  MatButtonModule
} from '@angular/material';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { DialogComponent } from './dialog/dialog.component';
import { DialogCloseDirective } from './dialog-close.directive';
import { OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';
import { DialogService } from './dialog.service';

const modules = [
  OverlayModule,
  PortalModule,
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  DragDropModule
]
@NgModule({
  imports: [
    CommonModule,
    ...modules
  ],
  entryComponents: [DialogComponent],
  providers: [DialogService],
  declarations: [DialogCloseDirective, DialogComponent],
  exports: [DialogCloseDirective]
})
export class DialogModule {}
