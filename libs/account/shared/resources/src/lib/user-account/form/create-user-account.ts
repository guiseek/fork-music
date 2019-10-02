import { FormField } from '@suite/common/forms/dynamic-form'
import { FormBackendConfig } from '@suite/interfaces'
import { Validators } from '@angular/forms'

export const createUserAccountFormFields: FormField[] = [{
  type: 'input',
  label: 'Nome',
  inputType: 'text',
  name: 'firstName',
  appearance: 'outline',
  // validations: [
  //   {
  //     name: 'required',
  //     validator: Validators.required,
  //     message: 'Nome obrigatório'
  //   },
  //   {
  //     name: 'maxlength',
  //     validator: Validators.maxLength(64),
  //     message: 'Máximo de 64 caracteres'
  //   }
  // ]
}, {
  type: 'input',
  label: 'Último nome',
  inputType: 'text',
  name: 'lastName',
  appearance: 'outline',
  validations: [
    {
      name: 'required',
      validator: Validators.required,
      message: 'Último nome obrigatório'
    },
    {
      name: 'maxlength',
      validator: Validators.maxLength(64),
      message: 'Máximo de 64 caracteres'
    }
  ]
}, {
  type: 'input',
  label: 'Senha',
  inputType: 'password',
  name: 'password',
  appearance: 'outline',
  validations: [
    {
      name: 'required',
      validator: Validators.required,
      message: 'Senha obrigatória'
    }
  ]
}, {
  type: 'input',
  label: 'Email',
  inputType: 'email',
  name: 'email',
  appearance: 'outline',
  validations: [
    {
      name: 'required',
      validator: Validators.required,
      message: 'Email obrigatório'
    },
    {
      name: 'email',
      validator: Validators.email,
      message: 'Endereço de email inválido'
    }
  ]
}, {
  type: 'button',
  label: 'Salvar'
}]

export const createUserAccountForm: FormBackendConfig = {
  endpoint: '/api/account/user-account',
  method: 'POST',
  fields: createUserAccountFormFields
}

export const createUserAccountFormStep = {
  label: 'Sua conta',
  form: createUserAccountForm
}