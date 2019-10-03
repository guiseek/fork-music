import { Component, OnInit } from '@angular/core';
import { DialogService } from '@suite/cdk/dialog';
import { Router, ActivatedRoute } from '@angular/router';
import { DialogFormComponent } from '@suite/ui-kit';
import { IEmployee } from '@suite/interfaces';
import { HttpDatabaseService } from '@suite/common/core';
import { MatSnackBar } from '@angular/material';
import { createEmployeeFormFields } from '@suite/common/forms/resources';
import { instructorResources } from '@suite/data';
import { IInstructor } from '@suite/interfaces';

@Component({
  selector: 'wd-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {
  public columns = [
    { columnDef: 'id', header: 'No.', cell: (element: any) => `${element.id}` },
    { columnDef: 'firstName', header: 'Nome', cell: (element: any) => `${element.firstName}, ${element.lastName}` },
    { columnDef: 'mobilePhone', header: 'Celular', cell: (element: any) => `${element.mobilePhone}` },
    // { columnDef: 'weight', header: 'Weight', cell: (element: any) => `${element.weight}` },
    // { columnDef: 'symbol', header: 'Symbol', cell: (element: any) => `${element.symbol}` },
  ];
  resources = instructorResources
  constructor(
    private dialogService: DialogService,
    private route: ActivatedRoute,
    private router: Router,
    private snack: MatSnackBar,
    private database: HttpDatabaseService
  ) { }

  ngOnInit() {
  }
  openDialogForm() {
    const ref = this.dialogService.open(
      DialogFormComponent,
      this.resources.dialogConfig
    //   {
    //   data: {
    //     fields: createEmployeeFormFields
    //   },
    //   header: {
    //     title: 'Grupos',
    //     subtitle: 'Agrupe usuários com permissões para conteúdos',
    //   },
    //   draggable: true,
    //   hasBackdrop: true
    // }
    )
    const sub = ref.afterClosed().subscribe((res) => {
      console.log(res)
      console.log(res.birthDate)
      console.log(new Date(res.birthDate))
      if (res) {
        this.database.post<IInstructor>(
          this.resources.endpoint,
          res
        ).subscribe((result) => {
          if (result) {
            this.snack.open(
              `${result.firstName} cadastrado`,
              'Fechar', { duration: 3000 }
            )
          }
        })
      }
      sub.unsubscribe()
    })
  }
  onEdit(data) {
    console.table(data)
    this.router.navigate([data.id], { relativeTo: this.route })
  }
}
