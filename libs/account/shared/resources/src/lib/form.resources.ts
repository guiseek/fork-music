import { Validators } from '@angular/forms';
import { FormField } from '@suite/common/forms/dynamic-form';

export const userAccountFormFields: FormField[] = [
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
export const createUserAccountFormFields: FormField[] = [
  ...userAccountFormFields,
  {
    type: 'select',
    label: 'Tipo de grupo',
    name: 'userGroupType',
    appearance: 'outline',
    options: [],
    validations: [
      {
        name: 'required',
        validator: Validators.required,
        message: 'Tipo obrigatório'
      }
    ]
  },
  {
    type: 'button',
    label: 'Salvar'
  }
]
export const userGroupTypeFormFields: FormField[] = [
  // {
  //   type: 'input',
  //   inputType: 'text',
  //   name: 'id'
  // },
  {
    type: 'input',
    label: 'Nome',
    inputType: 'text',
    name: 'typeName',
    validations: [
      {
        name: 'required',
        validator: Validators.required,
        message: 'Nome obrigatório'
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
    label: 'Mínimo',
    inputType: 'number',
    name: 'membersMin',
    value: 1,
    validations: [
      {
        name: 'required',
        validator: Validators.required,
        message: 'Nome obrigatório'
      },
      {
        name: 'minlength',
        validator: Validators.min(1),
        message: 'Mínimo 1'
      }
    ]
  },
  {
    type: 'input',
    label: 'Máximo',
    inputType: 'number',
    name: 'membersMax',
    value: 1,
    validations: [
      {
        name: 'required',
        validator: Validators.required,
        message: 'Nome obrigatório'
      },
      {
        name: 'minlength',
        validator: Validators.min(1),
        message: 'Minimo 1'
      }
    ]
  },
  {
    type: 'button',
    label: 'Salvar'
  }
]

export const userGroupFormFields: FormField[] = [
  // {
  //   type: 'input',
  //   inputType: 'text',
  //   name: 'id'
  // },
  {
    type: 'select',
    label: 'Tipo de grupo',
    name: 'userGroupType',
    options: [],
    validations: [
      {
        name: 'required',
        validator: Validators.required,
        message: 'Tipo obrigatório'
      }
    ]
  },
  {
    type: 'input',
    label: 'Mensagem do pedido',
    inputType: 'text',
    name: 'customerInvoiceData',
    value: '',
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
// export const userGroupForm