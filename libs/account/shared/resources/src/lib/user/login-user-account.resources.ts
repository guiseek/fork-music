import { FormField, FormBackendConfig } from '@suite/common/forms/dynamic-form'
import { Validators } from '@angular/forms'
import { regex } from '@suite/utils'
// import { FormBackendConfig } from '@suite/common/forms/form-backend'

export const loginUserAccountForm: FormField[] = [
  {
    type: 'input',
    label: 'Email',
    inputType: 'email',
    name: 'email',
    appearance: 'outline',
    validations: [
      {
        name: 'required',
        validator: Validators.required,
        message: 'Nome obrigatório'
      },
      {
        name: 'email',
        validator: Validators.email,
        message: 'Email inválido'
      }
    ]
  },
  {
    type: 'input',
    label: 'Senha',
    inputType: 'password',
    name: 'password',
    appearance: 'outline',
    validations: [
      {
        name: 'required',
        validator: Validators.required,
        message: 'Nome obrigatório'
      }
    ]
  },
  {
    type: 'button',
    label: 'Salvar'
  }
]

export const loginUserAccountFormBackend: FormBackendConfig = {
  fields: loginUserAccountForm,
  endpoint: '/api/account/login'
}