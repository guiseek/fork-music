import { Validators } from '@angular/forms';
import { FormField } from '@suite/common/forms/dynamic-form';
import { DialogHeader, DialogConfig } from '@suite/cdk/dialog';
import { Subject } from 'rxjs';
import { CardFeature } from '@suite/interfaces';

const backend = {
  endpoint: '/api/school/classroom-types',
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
    name: 'name',
    hint: 'Ex.: Aulas de guitarra em grupo',
    appearance: 'outline',
    validations: [
      {
        name: 'required',
        validator: Validators.required,
        message: 'Tipo de classe obrigatório'
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
    label: 'Descrição',
    inputType: 'text',
    name: 'description',
    appearance: 'outline',
    validations: [
      {
        name: 'required',
        validator: Validators.required,
        message: 'Descrição de classe obrigatório'
      },
      {
        name: 'maxlength',
        validator: Validators.maxLength(512),
        message: 'Máximo de 512 caracteres'
      }
    ]
  },
  {
    type: 'button',
    label: 'Salvar'
  }
]

const dialogHeaderConfig: DialogHeader = {
  title: 'Tipo de turma',
  subtitle: 'Segmente suas turmas',
  color: 'accent'
}

const dialogConfig: Partial<DialogConfig> = {
  hasBackdrop: true,
  draggable: true,
  header: dialogHeaderConfig,
  data: {
    formFields,
    model: {}
  }
}

const tableConfig = {
  endpoint: backend.endpoint,
  columns: [
    { columnDef: 'id', header: '#', cell: (element: any) => `${element.id}` },
    { columnDef: 'name', header: 'Nome', cell: (element: any) => `${element.name}` }
  ],
  editable: true,
  deletable: true,
  selectable: true
}
const card: CardFeature = {
  title: 'Tipos de turma',
  endpoint: '/api/school/classroom-types',
  refresh: new Subject,
  fields: formFields,
  columns: [
    { columnDef: 'id', header: '#', cell: (element: any) => `${element.id}` },
    { columnDef: 'name', header: 'Nome', cell: (element: any) => `${element.name}` }
  ],
  dialog: dialogConfig
}
export const classroomTypeResources = {
  backend,
  card,
  formFields,
  dialogConfig,
  tableConfig
}