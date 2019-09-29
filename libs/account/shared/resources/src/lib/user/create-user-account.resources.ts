import { FormField } from '@suite/common/forms/dynamic-form'
import { Validators } from '@angular/forms'

export const createUserAccountForm: FormField[] = [
  // {
  //   type: 'input',
  //   inputType: 'text',
  //   name: 'id'
  // },
  {
    type: 'input',
    label: 'Nome',
    inputType: 'text',
    name: 'firstName',
    appearance: 'outline',
    validations: [
      {
        name: 'required',
        validator: Validators.required,
        message: 'Nome obrigatório'
      },
      {
        name: 'maxlength',
        validator: Validators.maxLength(64),
        message: 'Máximo de 64 caracteres'
      }
    ]
  },
  {
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
  },
  {
    type: 'input',
    label: 'Usuário',
    inputType: 'text',
    name: 'username',
    appearance: 'outline',
    validations: [
      {
        name: 'required',
        validator: Validators.required,
        message: 'Usuário obrigatório'
      },
      {
        name: 'maxlength',
        validator: Validators.maxLength(64),
        message: 'Máximo de 64 caracteres'
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
        message: 'Senha obrigatória'
      }
    ]
  },
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
        message: 'Email obrigatório'
      },
      {
        name: 'email',
        validator: Validators.email,
        message: 'Endereço de email inválido'
      }
    ]
  },
  {
    type: 'city',
    label: 'Cidade',
    name: 'city',
    value: '',
    appearance: 'outline',
    validations: [
      {
        name: 'required',
        validator: Validators.required,
        message: 'Cidade obrigatória'
      }
    ]
  }
]
export const confirmationCodeOfUserAccountForm: FormField[] = [
  {
    type: 'input',
    label: 'Código de confirmação',
    inputType: 'input',
    name: 'confirmationCode',
    appearance: 'outline',
    // validations: [
    //   {
    //     name: 'required',
    //     validator: Validators.required,
    //     message: 'Código de confirmação obrigatório'
    //   }
    // ]
  }
]
// export const createUserAccountFormFields: FormField[] = [
//   ...userAccountFormFields,
//   {
//     type: 'select',
//     label: 'Tipo de grupo',
//     name: 'userGroupType',
//     appearance: 'outline',
//     options: [],
//     validations: [
//       {
//         name: 'required',
//         validator: Validators.required,
//         message: 'Tipo obrigatório'
//       }
//     ]
//   },
//   {
//     type: 'button',
//     label: 'Salvar'
//   }
// ]