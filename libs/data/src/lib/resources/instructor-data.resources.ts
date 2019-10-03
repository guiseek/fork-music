import { Validators } from '@angular/forms';
import { FormField } from '@suite/common/forms/dynamic-form';
import { DialogHeader, DialogConfig } from '@suite/cdk/dialog';
import { Subject } from 'rxjs';
import { CardFeature } from '@suite/interfaces';

const endpoint = '/api/school/instructors'
const backend = {
  endpoint,
  relations: [],
  fields: [],
  params: {
    per_page: 10
  }
}

const formFields: FormField[] = [
  {
    type: 'input',
    label: 'Nome',
    inputType: 'text',
    name: 'firstName',
    appearance: 'outline',
    validations: [
      {
        name: 'required',
        validator: Validators.required,
        message: 'Nome obrigatório'
      },
      {
        name: 'maxlength',
        validator: Validators.maxLength(128),
        message: 'Máximo de 128 caracteres'
      }
    ]
  },
  {
    type: 'input',
    label: 'Último nome',
    inputType: 'text',
    name: 'lastName',
    appearance: 'outline',
    validations: [
      {
        name: 'required',
        validator: Validators.required,
        message: 'Último nome obrigatório'
      },
      {
        name: 'maxlength',
        validator: Validators.maxLength(128),
        message: 'Máximo de 128 caracteres'
      }
    ]
  },
  {
    type: 'input',
    label: 'Título',
    inputType: 'text',
    name: 'title',
    appearance: 'outline',
    validations: [
      {
        name: 'maxlength',
        validator: Validators.maxLength(64),
        message: 'Máximo de 64 caracteres'
      }
    ]
  },
  {
    type: 'date',
    label: 'Aniversário',
    name: 'birthDate',
    appearance: 'outline',
    validations: [
      {
        name: 'required',
        validator: Validators.required,
        message: 'Nascimento obrigatório'
      }
    ]
  },
  {
    type: 'input',
    label: 'Endereço de email',
    inputType: 'email',
    name: 'contactMail',
    appearance: 'outline',
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
    label: 'Telefone',
    inputType: 'text',
    name: 'contactPhone',
    appearance: 'outline',
    validations: [
      {
        name: 'required',
        validator: Validators.required,
        message: 'Telefone obrigatório'
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
    label: 'Celular',
    inputType: 'text',
    name: 'contactMobile',
    appearance: 'outline',
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
    type: 'button',
    label: 'Salvar'
  }
]

const dialogHeaderConfig: DialogHeader = {
  title: 'Instrutor(a)',
  // subtitle: 'Segmente suas turmas',
  color: 'accent'
}

const dialogConfig: Partial<DialogConfig> = {
  hasBackdrop: true,
  draggable: true,
  header: dialogHeaderConfig,
  data: {
    fields: formFields,
    model: {}
  }
}
const tableColumns = [
  { columnDef: 'id', header: '#', cell: (element: any) => `${element.id}` },
  { columnDef: 'name', header: 'Nome', cell: (element: any) => `${element.firstName}` },
  { columnDef: 'phone', header: 'Celular', cell: (element: any) => `${element.contactMobile}` }
]
const tableConfig = {
  endpoint: backend.endpoint,
  columns: tableColumns,
  editable: true,
  deletable: true,
  selectable: false
}
const card: CardFeature = {
  title: 'Instrutores',
  endpoint,
  refresh: new Subject,
  fields: formFields,
  columns: tableColumns,
  dialog: dialogConfig
}
export const instructorResources = {
  endpoint,
  backend,
  card,
  formFields,
  dialogConfig,
  tableConfig,
  tableColumns
}