import { Component, OnInit, Optional, Inject, ViewChild } from '@angular/core';
import { DialogRef, DIALOG_DATA } from '@suite/cdk/dialog';
import { DynamicFormComponent } from '@suite/common/forms/dynamic-form';
import { DialogFormConfig } from '@suite/interfaces';

@Component({
  selector: 'ui-dialog-form',
  templateUrl: './dialog-form.component.html',
  styleUrls: ['./dialog-form.component.scss']
})
export class DialogFormComponent implements OnInit {
  @ViewChild(DynamicFormComponent, { static: true }) form: DynamicFormComponent;
  constructor(
    private dialogRef: DialogRef<string>,
    @Optional() @Inject(DIALOG_DATA) public data?: DialogFormConfig
  ) { }

  ngOnInit() {
    console.log(this.data)
  }
  close(data) {
    this.dialogRef.close(data)
  }
}
