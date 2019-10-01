import { FormField } from '@suite/common/forms/dynamic-form';
import { Validators } from '@angular/forms';
import { FormBackendConfig } from '@suite/interfaces';

export const confirmationCodeFormFields: FormField[] = [{
  type: 'input',
  label: 'Código de confirmação',
  inputType: 'input',
  name: 'confirmationCode',
  validations: [{
    name: 'required',
    message: 'Código obrigatório',
    validator: Validators.required
  }]
}, {
  type: 'button',
  label: 'Verificar'
}]

export const confirmationCodeForm: FormBackendConfig = {
  endpoint: '/api/account/user-account/confirmation',
  method: 'GET',
  fields: confirmationCodeFormFields
}

export const confirmationCodeFormStep = {
  label: 'Código de confirmação',
  form: confirmationCodeForm
}