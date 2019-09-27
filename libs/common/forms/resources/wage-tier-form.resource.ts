import { Validators } from '@angular/forms';
import { FormField } from '@suite/common/forms/dynamic-form';

export const wageTierFormFields: FormField[] = [
  {
    type: 'input',
    label: 'Faixa salarial',
    inputType: 'text',
    name: 'name',
    hint: 'Ex.: Mestre em música',
    appearance: 'outline',
    validations: [
      {
        name: 'required',
        validator: Validators.required,
        message: 'Faixa salarial obrigatória'
      }
    ]
  },
  {
    type: 'button',
    label: 'Salvar'
  }
]