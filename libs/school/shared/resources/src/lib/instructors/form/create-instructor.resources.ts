import { FormField, FormBackendConfig } from '@suite/common/forms/dynamic-form'
import { Validators } from '@angular/forms'

export const createInstructorForm: FormField[] = [
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
        validator: Validators.maxLength(128),
        message: 'Máximo de 128 caracteres'
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
        validator: Validators.maxLength(128),
        message: 'Máximo de 128 caracteres'
      }
    ]
  },
  {
    type: 'input',
    label: 'Título',
    inputType: 'text',
    name: 'title',
    appearance: 'outline',
    validations: [
      {
        name: 'maxlength',
        validator: Validators.maxLength(64),
        message: 'Máximo de 64 caracteres'
      }
    ]
  },
  {
    type: 'date',
    label: 'Aniversário',
    name: 'birthDate',
    appearance: 'outline',
    validations: [
      {
        name: 'required',
        validator: Validators.required,
        message: 'Nascimento obrigatório'
      }
    ]
  },
  {
    type: 'input',
    label: 'Endereço de email',
    inputType: 'email',
    name: 'contactMail',
    validations: [
      {
        name: 'required',
        validator: Validators.required,
        message: 'Email obrigatório'
      },
      {
        name: 'pattern',
        validator: Validators.pattern(
          '^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$'
        ),
        message: 'Endereço inválido'
      }
    ]
  },
  {
    type: 'input',
    label: 'Telefone',
    inputType: 'text',
    name: 'contactPhone',
    validations: [
      {
        name: 'required',
        validator: Validators.required,
        message: 'Telefone obrigatório'
      },
      {
        name: 'minlength',
        validator: Validators.minLength(9),
        message: 'Mínimo 9 digitos'
      },
      {
        name: 'maxlength',
        validator: Validators.maxLength(15),
        message: 'Máximo 15 digitos'
      }
    ]
  },
  {
    type: 'input',
    label: 'Celular',
    inputType: 'text',
    name: 'contactMobile',
    validations: [
      {
        name: 'required',
        validator: Validators.required,
        message: 'Celular obrigatório'
      },
      {
        name: 'minlength',
        validator: Validators.minLength(9),
        message: 'Mínimo 9 digitos'
      },
      {
        name: 'maxlength',
        validator: Validators.maxLength(15),
        message: 'Máximo 15 digitos'
      }
    ]
  },
]

export const createInstructorFormBackend: FormBackendConfig = {
  fields: createInstructorForm,
  endpoint: '/api/school/instructors'
}