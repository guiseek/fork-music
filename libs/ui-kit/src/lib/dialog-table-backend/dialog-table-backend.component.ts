import { Component, OnInit, Optional, Inject } from '@angular/core';
import { DialogRef, DIALOG_DATA } from '@suite/cdk/dialog';

@Component({
  selector: 'ui-dialog-table-backend',
  templateUrl: './dialog-table-backend.component.html',
  styleUrls: ['./dialog-table-backend.component.scss']
})
export class DialogTableBackendComponent implements OnInit {
  constructor(
    private dialogRef: DialogRef<string>,
    @Optional() @Inject(DIALOG_DATA) public data?: any
  ) { }

  ngOnInit() {
    console.log(this.data)
  }
  close(data) {
    this.dialogRef.close(data)
  }
}
