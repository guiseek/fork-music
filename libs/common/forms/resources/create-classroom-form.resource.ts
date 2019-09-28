import { Validators } from '@angular/forms';
import { FormField } from '@suite/common/forms/dynamic-form';

export const createClassroomFormFields: FormField[] = [
  {
    type: 'input',
    label: 'Nome',
    inputType: 'text',
    name: 'name',
    hint: 'Ex.: Aulas de guitarra',
    appearance: 'outline',
    validations: [
      {
        name: 'required',
        validator: Validators.required,
        message: 'Nome de classe obrigatório'
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
    type: 'date',
    label: 'Inicio',
    name: 'startDate',
    validations: [
      {
        name: 'required',
        validator: Validators.required,
        message: 'Data inicial obrigatória'
      }
    ]
  },
  {
    type: 'date',
    label: 'Término',
    name: 'endDate',
    validations: [
      {
        name: 'required',
        validator: Validators.required,
        message: 'Data final obrigatória'
      }
    ]
  },
  {
    type: 'checkbox',
    label: 'Concluída',
    name: 'completed',
    value: false
  },
  {
    type: 'select',
    label: 'Tipo de classe',
    name: 'classroomType',
    value: '',
    options: [],
    asyncOptions: {
      endpoint: '/api/school/classroom-types',
      value: 'id',
      viewValue: 'name'
    }
  },
  {
    type: 'button',
    label: 'Salvar'
  }
]