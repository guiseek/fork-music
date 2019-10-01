import { Component, HostListener } from '@angular/core';
import { HelperService, HelperState } from './helper.service';

@Component({
  selector: 'edu-helper-hotkey-listener',
  template: `<ng-content></ng-content>`
})
export class HelperHotkeyListenerComponent {
  constructor(public helperService: HelperService) { }

  /**
   * Configures hot keys for controlling the helper with the keyboard
   */
  @HostListener('window:keydown.Escape')
  public onEscapeKey(): void {
    if (
      this.helperService.getStatus() === HelperState.ON &&
      this.helperService.isHotkeysEnabled()
    ) {
      this.helperService.end();
    }
  }

  @HostListener('window:keydown.ArrowRight')
  public onArrowRightKey(): void {
    if (
      this.helperService.getStatus() === HelperState.ON &&
      this.helperService.hasNext(this.helperService.currentStep) &&
      this.helperService.isHotkeysEnabled()
    ) {
      this.helperService.next();
    }
  }

  @HostListener('window:keydown.ArrowLeft')
  public onArrowLeftKey(): void {
    if (
      this.helperService.getStatus() === HelperState.ON &&
      this.helperService.hasPrev(this.helperService.currentStep) &&
      this.helperService.isHotkeysEnabled()
    ) {
      this.helperService.prev();
    }
  }
}