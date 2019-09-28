import { Validators } from '@angular/forms';
import { FormField } from '@suite/common/forms/dynamic-form';

export const createClassroomTypeFormFields: FormField[] = [
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