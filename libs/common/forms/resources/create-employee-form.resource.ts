import { EmployeeType } from "@suite/interfaces";
import { FormField } from '@suite/common/forms/dynamic-form';
import { Validators } from '@angular/forms';

export const createEmployeeFormFields: FormField[] = [
  {
    type: 'radiobutton',
    name: 'employeeType',
    options: [{
      value: EmployeeType.Teacher,
      viewValue: 'Professor'
    }, {
      value: EmployeeType.Staff,
      viewValue: 'Administrativo'
    }],
    value: EmployeeType.Teacher
  },
  {
    type: 'checkbox',
    label: 'Incluir como professor?',
    name: 'includeAsTeacher',
    value: true
  },
  {
    type: 'input',
    label: 'Nome',
    inputType: 'text',
    name: 'firstName',
    validations: [
      {
        name: 'required',
        validator: Validators.required,
        message: 'Nome obrigatório'
      },
      {
        name: 'pattern',
        validator: Validators.pattern('^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$'),
        message: 'Apenas texto'
      }
    ]
  },
  {
    type: 'input',
    label: 'Sobrenome',
    inputType: 'text',
    name: 'lastName',
    validations: [
      {
        name: 'required',
        validator: Validators.required,
        message: 'Sobrenome obrigatório'
      },
      {
        name: 'pattern',
        validator: Validators.pattern('^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$'),
        message: 'Apenas texto'
      }
    ]
  },
  {
    type: 'input',
    label: 'Endereço de email',
    inputType: 'email',
    name: 'email',
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
    label: 'Celular',
    inputType: 'text',
    name: 'mobilePhone',
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
  {
    type: 'date',
    label: 'Contratação',
    name: 'hireDate',
    validations: [
      {
        name: 'required',
        validator: Validators.required,
        message: 'Data de contratação obrigatória'
      }
    ]
  },
  // {
  //   type: 'select',
  //   label: 'Country',
  //   name: 'country',
  //   value: 'UK',
  //   options: ['India', 'UAE', 'UK', 'US']
  // },
  // {
  //   type: 'checkbox',
  //   label: 'Accept Terms',
  //   name: 'term',
  //   value: true
  // },
  {
    type: 'button',
    label: 'Salvar'
  }
];