import { Validators } from '@angular/forms';
import { FormField } from '@suite/common/forms/dynamic-form';
import { DialogHeader, DialogConfig } from '@suite/cdk/dialog';

export const backend = {
  endpoint: '/api/school/categories',
  relations: [],
  fields: [],
  params: {
    per_page: 10
  }
}

export const formFields: FormField[] = [
// {
//   type: 'input',
//   inputType: 'text',
//   name: 'id'
// },
{
  type: 'input',
  label: 'Nome',
  inputType: 'text',
  name: 'name',
  hint: 'Ex.: Estilo músical preferido',
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
  type: 'button',
  label: 'Salvar'
}
]

export const dialogHeaderConfig: DialogHeader = {
  title: 'Categoria',
  subtitle: 'Segmente seus alunos',
  color: 'accent'
}

export const dialogConfig: Partial<DialogConfig> = {
  hasBackdrop: true,
  draggable: true,
  header: dialogHeaderConfig,
  data: {
    formFields,
    model: {}
  }
}

export const tableConfig = {
  endpoint: backend.endpoint,
  columns: [
    { columnDef: 'id', header: '#', cell: (element: any) => `${element.id}` },
    { columnDef: 'name', header: 'Nome', cell: (element: any) => `${element.name}` }
  ],
  editable: true,
  deletable: true,
  selectable: true
}

export const categoryResources = {
  backend,
  formFields,
  dialogConfig,
  tableConfig
}