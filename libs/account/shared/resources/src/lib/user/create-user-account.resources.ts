import { FormField, FormBackendConfig } from '@suite/common/forms/dynamic-form'
import { Validators } from '@angular/forms'
// import { FormBackendConfig } from '@suite/common/forms/form-backend'
import { Router } from '@angular/router'
import { MatSnackBar } from '@angular/material'

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
    type: 'selectAsync',
    label: 'Async',
    name: 'groupType',
    asyncConfig: {
      endpoint: '/api/account/user-group-type',
      value: 'id',
      viewValue: 'typeName'
    }
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
  },
  {
    type: 'button',
    label: 'Salvar'
  }
]
export const createUserAccountFormBackend: FormBackendConfig = {
  fields: createUserAccountForm,
  endpoint: '/api/account/user-account'
}
export const createUserAccountPage = {
  fx: {
    layout: 'column',
    align: 'center center'
  },
  title: 'Criar conta',
  subtitle: 'Preencha o formulário e vamos começar',
  form: createUserAccountFormBackend,
  then: (res, router: Router) => {
    console.log('res: ', res)
    router.navigate(['/confirm', res.confirmationCode])
  },
  catch: (error, snack: MatSnackBar) => {
    console.log('error: ', error)
    const errors = Object.keys(
      error.message.reduce((previous, current) => {
        previous[current.property] = Object.values(current.constraints)
        return previous
      }, {})
    ).join(', ')
    snack.open(
      errors
    )
  },
  onResponse: (res, router?: Router) => {
    if (router) {
      router.navigate(['/confirm', res.confirmationCode])
    }
  }

}
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