import { FormField } from '@suite/common/forms/dynamic-form'
import { FormBackendConfig } from '@suite/interfaces'
import { Validators } from '@angular/forms'

export const createUserGroupFormFields: FormField[] = [{
  type: 'selectAsync',
  label: 'Async',
  name: 'userGroupType',
  asyncConfig: {
    endpoint: '/api/account/user-group-type',
    value: 'id',
    viewValue: 'typeName'
  }
}, {
  type: 'input',
  label: 'Mensagem do pedido',
  inputType: 'text',
  name: 'customerInvoiceData',
  value: '',
  hint: 'Descrição que aparecerá na fatura',
  validations: [
    {
      name: 'required',
      validator: Validators.required,
      message: 'Mensagem obrigatória'
    }
  ]
},
{
  type: 'button',
  label: 'Salvar'
}]

export const createUserGroupForm: FormBackendConfig = {
  endpoint: '/api/account/user-group',
  method: 'POST',
  fields: createUserGroupFormFields
}

export const createUserGroupFormStep = {
  label: 'Grupo',
  form: createUserGroupForm
}