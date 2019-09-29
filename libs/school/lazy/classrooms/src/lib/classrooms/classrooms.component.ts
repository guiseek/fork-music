import { Component, OnInit, ViewChild } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { TableBackendComponent } from '@suite/common/tables/table-backend';
import { MatSnackBar } from '@angular/material';
import { DialogService } from '@suite/cdk/dialog';
import { HttpDatabaseService } from '@suite/common/core';
import { createClassroomFormFields } from '@suite/common/forms/resources';
import { IClassroomType } from '@suite/interfaces';
import { switchMap, map, finalize, tap } from 'rxjs/operators';
import { FormFieldOption, FormField } from '@suite/common/forms/dynamic-form';
import { DialogFormComponent } from '@suite/ui-kit';
import { classroomResources } from '@suite/data';

@Component({
  selector: 'school-classrooms',
  templateUrl: './classrooms.component.html',
  styleUrls: ['./classrooms.component.scss']
})
export class ClassroomsComponent implements OnInit {
  public columns = [
    { columnDef: 'id', header: '#', format: 'currency', cell: (element: any) => `${element.id}` },
    { columnDef: 'name', header: 'Nome', cell: (element: any) => `${element.name}` },
    { columnDef: 'startDate', header: 'Inicio', cell: (element: any) => `${element.startDate}`, format: 'date' },
    { columnDef: 'endDate', header: 'Término', cell: (element: any) => `${element.endDate}`, format: 'date' }
  ];
  refresh = new Subject
  types$: Observable<FormField[]>
  fields: FormField[]
  options: FormField[]
  constructor(
    private dialogService: DialogService,
    private database: HttpDatabaseService,
    private snack: MatSnackBar
  ) { }

  ngOnInit() {
  }
  getTypes() {
    return this.database.get<IClassroomType[]>('/api/school/classroom-types', {})
      .pipe(
        map(this.getTypeOptions),
        tap((fields) => this.fields = fields)
      )
  }
  getTypeOptions(types: IClassroomType[]): FormField[] {
    return classroomResources.form
      .map((f) => {
        if (f.name === 'classroomType') {
          f.options = types.map(({ id, name }) => {
            return { value: id, viewValue: name }
          })
        }
        return f
      })
  }
  onSelection(data) {
    console.log(data)
    return data
  }
  openClassroomForm() {
    return this.dialogService.open(
      DialogFormComponent, {
      data: {
        fields: this.fields,
        model: null
      }, header: {
        title: 'Criar turma'
      },
      draggable: true,
      hasBackdrop: true
    })
  }
  async addClassroom() {
    if (!this.fields) {
      await this.getTypes().toPromise()
    }

    const sub = this.openClassroomForm()
      .afterClosed().subscribe((res) => {
        if (res) {
          this.database.post(
            '/api/school/classrooms',
            res
          ).subscribe((result) => {
            if (result) {
              console.log(result)
              this.refresh.next(true)
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
}
