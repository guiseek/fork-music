import { Component, OnInit } from '@angular/core';
import { instructorTable, createInstructorForm } from '@suite/school/shared/resources';
import { DialogService } from '@suite/cdk/dialog';
import { DialogTableBackendComponent, DialogFormComponent } from '@suite/ui-kit';
import { instructorResources } from '@suite/data';
import { HttpDatabaseService } from '@suite/common/core';

@Component({
  selector: 'school-instructors',
  templateUrl: './instructors.component.html',
  styleUrls: ['./instructors.component.scss']
})
export class InstructorsComponent implements OnInit {
  public table = instructorTable
  constructor(
    private dialogService: DialogService,
    private database: HttpDatabaseService
  ) { }

  ngOnInit() {
    console.table(createInstructorForm)
    console.log(instructorResources.dialogConfig)
  }
  refresh() {
    this.table.refresh.next()
  }
  openDialogForm() {
    const ref = this.dialogService.open(
      DialogFormComponent,
      instructorResources.dialogConfig
    )
    const sub = ref.afterClosed()
      .subscribe((res) => {
        console.log(res)
        if (res) {
          this.save(res)
          sub.unsubscribe()
        }
      })
  }
  save(data) {
    this.database.send(
      instructorResources.backend.endpoint,
      data
    ).subscribe((res) => {
      console.log(res)
      this.table.refresh.next(true)
    })
  }
}
