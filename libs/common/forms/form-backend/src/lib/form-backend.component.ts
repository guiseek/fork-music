import { Component, OnInit, Input } from '@angular/core';
import { HttpDatabaseService } from '@suite/common/core';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { MatSnackBar } from '@angular/material';
import { FormBackendConfig } from '@suite/interfaces';
import { FormField } from '@suite/common/forms/dynamic-form';

@Component({
  selector: 'suite-form-backend',
  templateUrl: './form-backend.component.html',
  styleUrls: ['./form-backend.component.scss']
})
export class FormBackendComponent implements OnInit {
  @Input() config: FormBackendConfig
  fields: FormField[]
  serverError = []
  constructor(
    private database: HttpDatabaseService,
    private snack: MatSnackBar
  ) { }

  ngOnInit() {
    const { endpoint, fields } = this.config
    if (!endpoint) {
      throw new Error('Atributo endpoint ausente')
    }
    if (!fields) {
      throw new Error('Atributo fields ausente')
    }
    this.fields = fields
    console.log('fields: ', this.config)
  }
  onSubmit(data) {
    const sub = this.database.send(
      this.config.endpoint, data
    )
      .pipe(
        catchError(({ error }: any) => {
          const errors = error.message.reduce((previous, current) => {
            previous[current.property] = Object.values(current.constraints)
            return previous
          }, {})
          this.serverError = []
          Object.keys(errors).map((k) => {
            this.serverError.push(
              errors[k]
            )
          })
          // this.serverError.join(', ')
          this.openSnack(this.serverError.join(', '))
          return throwError(errors)
        })
      )
      .subscribe((res) => {
        // this.serverError.next(res)
        // this.serverError = null
        // Object.keys(res).map((k) => {
        //   this.serverError.push(
        //     res[k]
        //   )
        // })
        this.openSnack()
        sub.unsubscribe()
        console.log('res: ', res)
      })

    // ).pipe(
    //   catchError(error => error)
    // )
    // .subscribe((result) => {
    //   console.log(result)
    //   sub.unsubscribe()
    // })

  }
  openSnack(message: string = 'Salvo!') {
    this.snack.open(message, 'Fechar', { duration: 5000 })
  }
}
