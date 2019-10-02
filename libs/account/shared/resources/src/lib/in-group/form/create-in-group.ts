import { FormField } from '@suite/common/forms/dynamic-form'
import { FormBackendConfig } from '@suite/interfaces'
import { Validators } from '@angular/forms'

export const createInGroupFormFields: FormField[] = [{
  type: 'selectAsync',
  label: 'Async',
  name: 'userGroup',
  asyncConfig: {
    endpoint: '/api/account/user-group',
    value: 'id',
    viewValue: 'customerInvoiceData'
  }
}, {
  type: 'selectAsync',
  label: 'Async',
  name: 'userGroup',
  asyncConfig: {
    endpoint: '/api/account/user-account',
    value: 'id',
    viewValue: 'email'
  }
}, {
  type: 'checkbox',
  label: 'É admin',
  name: 'groupAdmin',
  value: false
}, {
  type: 'button',
  label: 'Salvar'
}]

export const createInGroupForm: FormBackendConfig = {
  endpoint: '/api/account/in-group',
  method: 'POST',
  fields: createInGroupFormFields
}

export const createInGroupFormStep = {
  label: 'Grupos',
  form: createInGroupForm
}