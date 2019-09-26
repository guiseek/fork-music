import { Directive, Input, Optional, HostListener, HostBinding } from '@angular/core';
import { DialogRef } from './dialog-ref';

@Directive({
  selector: '[suiteDialogClose], [suite-dialog-close], suite-dialog-close',
  exportAs: 'suiteDialogClose'
})

export class DialogCloseDirective<T = any> {
  @Input('suiteDialogClose') dialogResult: T
  @HostBinding('class') class = 'suite-dialog-close'

  constructor(
    @Optional() private dialogRef: DialogRef<T>
  ) { }

  @HostListener('click') onClick(): void {
    if (!this.dialogRef) {
      console.error('DialogClose is not supported within a template')

      return
    }

    this.dialogRef.close(this.dialogResult)
  }
}
