import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { HttpDatabaseService } from '@suite/common/core';
import { DialogService } from '@suite/cdk/dialog';
import { DialogFormComponent, DialogTableBackendComponent } from '@suite/ui-kit';
import { createClassroomTypeFormFields, createClassroomFormFields } from '@suite/common/forms/resources';
import { classroomResources, classroomDialogHeader, classroomHelper } from '@suite/data';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'school-classrooms-layout',
  templateUrl: './classrooms-layout.component.html',
  styleUrls: ['./classrooms-layout.component.scss']
})
export class ClassroomsLayoutComponent implements OnInit {
  public resources = classroomResources
  @ViewChild('classroomHelper', { static: true }) classroomHelper: TemplateRef<any>
  public columns = [
    { columnDef: 'id', header: '#', cell: (element: any) => `${element.id}` },
    { columnDef: 'name', header: 'Nome', cell: (element: any) => `${element.name}` },
    // { columnDef: 'description', header: 'Desc', cell: (element: any) => `${element.description}` }
  ];
  fields = []
  types$: Observable<any[]>
  refresh = new Subject
  constructor(
    private dialogService: DialogService,
    private database: HttpDatabaseService,
    private snack: MatSnackBar
  ) { }

  ngOnInit() {
  }
  openHelper() {
    this.dialogService.open(
      this.classroomHelper, {
      header: classroomDialogHeader,
      data: classroomHelper.model,
    })
  }
  onSubmit(data) {
    console.table(data)
    this.database.post(
      '/api/school/classrooms',
      data
    ).subscribe((res) => {
      console.table(res)
      this.openSnack(`Classe ${res.name} salva!`)
    })
  }
  openSnack(message: string) {
    const ref = this.snack.open(message, 'Recarregar', { duration: 5000 })
    const sub = ref.onAction().subscribe(() => {
      this.refresh.next(true)
      sub.unsubscribe()
    })
  }
  addClassroom() {
    const ref = this.dialogService.open(
      DialogFormComponent, {
      data: createClassroomFormFields,
      header: {
        title: 'Criar turma'
      },
      draggable: true,
      hasBackdrop: true
    })
    const sub = ref.afterClosed().subscribe((res) => {
      console.log(res)
      console.log(res.hireDate)
      console.log(new Date(res.hireDate))
      if (res) {
        this.database.post(
          '/api/school/classrooms',
          res
        ).subscribe((result) => {
          if (result) {
            console.log(result)
            this.snack.open(
              `${result.name} cadastrado`,
              'Fechar', { duration: 3000 }
            )
          }
        })
      }
      sub.unsubscribe()
    })
  }
  openTypes() {
    const ref = this.dialogService.open(
      DialogTableBackendComponent, {
      data: {
        endpoint: '/api/school/classroom-types',
        columns: [
          { columnDef: 'id', header: '#', cell: (element: any) => `${element.id}` },
          { columnDef: 'name', header: 'Nome', cell: (element: any) => `${element.name}` }
        ]
      },
      header: {
        title: 'Tipos de classe'
      },
      panelClass: 'no-padding',
      draggable: true,
      hasBackdrop: true
    })
  }
  addClassType() {
    const ref = this.dialogService.open(
      DialogFormComponent, {
      data: createClassroomTypeFormFields,
      header: {
        title: 'Tipo de classe'
      },
      draggable: true,
      hasBackdrop: true
    })
    const sub = ref.afterClosed().subscribe((res) => {
      console.log(res)
      console.log(res.hireDate)
      console.log(new Date(res.hireDate))
      if (res) {
        this.database.post(
          '/api/school/classroom-types',
          res
        ).subscribe((result) => {
          if (result) {
            console.log(result)
            // this.snack.open(
            //   `${result.firstName} cadastrado`,
            //   'Fechar', { duration: 3000 }
            // )
          }
        })
      }
      sub.unsubscribe()
    })
  }
}
