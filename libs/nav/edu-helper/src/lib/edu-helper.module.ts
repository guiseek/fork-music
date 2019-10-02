import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelperAnchorDirective } from './anchor.directive';
import { HelperHotkeyListenerComponent } from './helper-hotkey-listener.component';
import { HelperAnchorOpenerComponent } from './helper-anchor-opener.component';
import { AnchorMenuDirective } from './anchor-menu.directive';
import { HelperStepTemplateComponent } from './helper-step-template/helper-step-template.component';
import { HelperService } from './helper.service';
import {
  MatMenuModule,
  MatCardModule,
  MatIconModule,
  MatButtonModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatMenuModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule
  ],
  declarations: [
    HelperHotkeyListenerComponent,
    HelperAnchorOpenerComponent,
    AnchorMenuDirective,
    HelperStepTemplateComponent
  ],
  exports: [
    HelperHotkeyListenerComponent,
    HelperAnchorOpenerComponent,
    AnchorMenuDirective,
    HelperStepTemplateComponent
  ]
})
export class EduHelperModule {
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: EduHelperModule,
      providers: [
        HelperService,
      ],
    };
  }
}
