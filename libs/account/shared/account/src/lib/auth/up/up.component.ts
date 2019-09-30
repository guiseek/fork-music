import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountService } from '../../services/account.service';
import { MatSnackBar } from '@angular/material';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { ValidationErrors } from '@angular/forms';
import { FormValidators } from '@suite/utils';


@Component({
  selector: 'account-auth-up',
  templateUrl: './up.component.html',
  styleUrls: ['./up.component.scss']
})
export class UpComponent implements OnInit {
  resource
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private snack: MatSnackBar,
    private database: AccountService
  ) { }

  ngOnInit() {
    this.resource = this.route.snapshot.data.resource
  }
  onSubmit(value) {
    const sub = this.database.up(value).pipe(
      catchError(error => {
        console.log(error)
        const errorToObject = FormValidators.validationErrorToObject(error.message)
        console.log('error')
        console.log(errorToObject)
        return throwError(error)
      })
    ).subscribe((result) => {
      console.log(result)
      sub.unsubscribe()
    })
    // .toPromise()
    //   .then(this.resource.then.bind(this, this.router))
    //   .catch(this.resource.catch.bind(this, this.snack))
      // .subscribe(res => this.resource.onResponse(res, this.router))
  }
  openSnack(message: string) {
    this.snack.open(message)
  }
}

// export function validationErrorToObject(ve: ValidationErrors): ValidationObject {
//   return ve.reduce((p, c: ValidationErrors): ValidationObject => {
//     if (!c.children || !c.children.length) {
//       p[c.property] = {
//         value: c.value,
//         constraints: Object.keys(c.constraints)
//           .map(key => {
//             return capitalize(c.constraints[key]) + ".\u00a0";
//           })
//       }
//     } else {
//       p[c.property] = validationErrorToObject(c.children);
//     }
//     return p;
//   }, {} as ValidationObject);
// }

// export interface ValidationObject {
//   [key: string]:
//   { value: string, constraints: string[] } | ValidationObject
// }

// export function capitalize(string) {
//   return string.charAt(0).toUpperCase() + string.slice(1);
// }