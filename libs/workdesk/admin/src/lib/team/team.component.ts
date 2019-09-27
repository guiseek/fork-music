import { Component, OnInit } from '@angular/core';
import { DialogService } from '@suite/cdk/dialog';
import { Router, ActivatedRoute } from '@angular/router';
import { DialogFormComponent } from '@suite/ui-kit';
import { FormField } from '@suite/common/forms/dynamic-form';
import { Validators } from '@angular/forms';
import { EmployeeType, EmployeeStatus, IEmployee } from '@suite/interfaces';
import { HttpDatabaseService } from '@suite/common/core';
import { MatSnackBar } from '@angular/material';
import { createEmployeeFormFields } from '@suite/common/forms/resources';

const employeeFields: FormField[] = [
  {
    type: 'radiobutton',
    name: 'employeeType',
    options: [{
      value: EmployeeType.Teacher,
      viewValue: 'Professor'
    }, {
      value: EmployeeType.Staff,
      viewValue: 'Administrativo'
    }],
    value: 'Teacher'
  },
  {
    type: 'checkbox',
    label: 'Incluir como professor?',
    name: 'includeAsTeacher',
    value: true
  },
  {
    type: 'input',
    label: 'Nome',
    inputType: 'text',
    name: 'firstName',
    validations: [
      {
        name: 'required',
        validator: Validators.required,
        message: 'Nome obrigatório'
      },
      {
        name: 'pattern',
        validator: Validators.pattern('^[a-zA-Z]+$'),
        message: 'Apenas texto'
      }
    ]
  },
  {
    type: 'input',
    label: 'Sobrenome',
    inputType: 'text',
    name: 'lastName',
    validations: [
      {
        name: 'required',
        validator: Validators.required,
        message: 'Sobrenome obrigatório'
      },
      {
        name: 'pattern',
        validator: Validators.pattern('^[a-zA-Z]+$'),
        message: 'Apenas texto'
      }
    ]
  },
  {
    type: 'input',
    label: 'Endereço de email',
    inputType: 'email',
    name: 'email',
    validations: [
      {
        name: 'required',
        validator: Validators.required,
        message: 'Email obrigatório'
      },
      {
        name: 'pattern',
        validator: Validators.pattern(
          '^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$'
        ),
        message: 'Endereço inválido'
      }
    ]
  },
  {
    type: 'input',
    label: 'Celular',
    inputType: 'text',
    name: 'mobilePhone',
    validations: [
      {
        name: 'required',
        validator: Validators.required,
        message: 'Celular obrigatório'
      },
      {
        name: 'minlength',
        validator: Validators.minLength(9),
        message: 'Mínimo 9 digitos'
      },
      {
        name: 'maxlength',
        validator: Validators.maxLength(15),
        message: 'Máximo 15 digitos'
      }
    ]
  },
  {
    type: 'input',
    label: 'Telefone residencial',
    inputType: 'text',
    name: 'homePhone',
    validations: [
      {
        name: 'minlength',
        validator: Validators.minLength(9),
        message: 'Mínimo 9 digitos'
      },
      {
        name: 'maxlength',
        validator: Validators.maxLength(15),
        message: 'Máximo 15 digitos'
      }
    ]
  },
  {
    type: 'date',
    label: 'Aniversário',
    name: 'birthDate'
  },
  {
    type: 'date',
    label: 'Contratação',
    name: 'hireDate',
    validations: [
      {
        name: 'required',
        validator: Validators.required,
        message: 'Data de contratação obrigatória'
      }
    ]
  },
  {
    type: 'radiobutton',
    name: 'status',
    options: [{
      value: EmployeeStatus.Active,
      viewValue: 'Ativo'
    }, {
      value: EmployeeStatus.Inactive,
      viewValue: 'Inativo'
    }, {
      value: EmployeeStatus.Prospective,
      viewValue: 'Prospectivo'
    }],
    value: EmployeeStatus.Active
  },
  // {
  //   type: 'select',
  //   label: 'Country',
  //   name: 'country',
  //   value: 'UK',
  //   options: ['India', 'UAE', 'UK', 'US']
  // },
  // {
  //   type: 'checkbox',
  //   label: 'Accept Terms',
  //   name: 'term',
  //   value: true
  // },
  {
    type: 'button',
    label: 'Salvar'
  }
];

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
      DialogFormComponent, {
      data: createEmployeeFormFields,
      header: {
        title: 'Grupos',
        subtitle: 'Agrupe usuários com permissões para conteúdos',
      },
      draggable: true,
      hasBackdrop: true
    }
    )
    const sub = ref.afterClosed().subscribe((res) => {
      console.log(res)
      console.log(res.hireDate)
      console.log(new Date(res.hireDate))
      if (res) {
        this.database.post<IEmployee>(
          '/api/employees',
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
