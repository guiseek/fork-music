import { FormField, FormBackendConfig } from '@suite/common/forms/dynamic-form'
import { Validators } from '@angular/forms'
import { regex } from '@suite/utils'
// import { FormBackendConfig } from '@suite/common/forms/form-backend'

export const createSoftwareForm: FormField[] = [
  {
    type: 'input',
    label: 'Nome do software',
    inputType: 'text',
    name: 'softwareName',
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
    type: 'input',
    label: 'Detalhes',
    inputType: 'text',
    name: 'details',
    appearance: 'outline'
  },
  {
    type: 'input',
    label: 'Link',
    inputType: 'text',
    name: 'accessLink',
    appearance: 'outline',
    validations: [
      {
        name: 'pattern',
        validator: Validators.pattern(regex.URL_REGEXP),
        message: 'URL inválida'
      }
    ]
  },
  {
    type: 'button',
    label: 'Salvar'
  }
]

export const createSoftwareFormBackend: FormBackendConfig = {
  fields: createSoftwareForm,
  endpoint: '/api/account/software',
  updateOn: 'blur',
  actions: {
    reset: true,
    disableInvalid: false
  }
}