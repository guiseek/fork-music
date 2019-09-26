import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpDatabaseService } from '@suite/common/core';
import { catchError } from 'rxjs/operators';
import { throwError, of, BehaviorSubject } from 'rxjs';
import { IEmployee } from '@suite/interfaces';
import { EmployeeStatusForm } from '@suite/common/forms/team-form';

@Component({
  selector: 'wd-employee-profile',
  templateUrl: './employee-profile.component.html',
  styleUrls: ['./employee-profile.component.scss']
})
export class EmployeeProfileComponent implements OnInit {
  public employee: IEmployee
  public serverError = []
  public errors = new BehaviorSubject<any>(null)
  public employeeForm = new EmployeeStatusForm
  constructor(
    private route: ActivatedRoute,
    private database: HttpDatabaseService
  ) { }

  ngOnInit() {
    const {employee} = this.route.snapshot.parent.data
    console.log(employee)
    this.employee = employee

    console.log(this.employeeForm.value)
  }
  onSave(data) {
    console.log(data)
    this.database.post('/api/employees', data)
      .pipe(
        catchError(({ error }: any) => {
          console.log(error)
          const errors = error.message.reduce((previous, current) => {
            previous[current.property] = Object.values(current.constraints)
            console.log('previous: ', previous)
            console.log('current: ', current)
            return previous
          }, {})
          return of(errors)
        })
      )
      .subscribe((res) => {
        this.errors.next(res)
        Object.keys(res).map((k) => {
          this.serverError.push(
            res[k]
          )
        })
        console.log(res)
      })
  }
}
