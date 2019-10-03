import { Component, OnInit } from '@angular/core';
import { DialogRef, DIALOG_DATA } from '@suite/cdk/dialog';
import { HttpClient } from '@angular/common/http';
import { switchMap, tap, debounceTime } from 'rxjs/operators';

@Component({
  selector: 'auth-confirmation-code',
  templateUrl: './confirmation-code.component.html',
  styleUrls: ['./confirmation-code.component.scss']
})
export class ConfirmationCodeComponent implements OnInit {
  win = false
  constructor(
    private dialogRef: DialogRef<string>,
    private http: HttpClient
  ) { }

  ngOnInit() {
  }

  onSubmit(code: string) {
    this.http.get(
      'account/user-account/confirmation',
      { params: { code } }
    ).pipe(
      tap(() => {
        this.win = true
      }),
      debounceTime(5000),
      tap(() => {
        this.dialogRef.close(code)
      })
    )
  }
}
