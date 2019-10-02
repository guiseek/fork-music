import { ValidatorFn, ValidationErrors, FormGroup, FormControl } from '@angular/forms';
import { capitalize } from './text-capitalize';

const URL_REGEXP = /^(http?|https):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|web|app|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/
const NUMBER_REGEXP = /^-?[\d.]+(?:e-?\d+)?$/
const EMAIL_REGEXP = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/


export type Validator<T extends FormControl> = (c: T) => {
  [error: string]: any
};

export interface ValidationObject {
  [key: string]:
  { value: string, constraints: string[] } | ValidationObject
}

export const regex = {
  URL_REGEXP,
  NUMBER_REGEXP
}

export function confirmPassword(
  control: string = 'password',
  confirmControl: string = 'confirm'
) {
  return (formGroup: FormGroup) => {
    const ctrl = formGroup.controls[control];
    const confirmCtrl = formGroup.controls[confirmControl];

    if (confirmCtrl.errors && !confirmCtrl.errors.notEqual) {
      // return if another validator has already found an error on the confirmCtrl
      return;
    }

    // set error on confirmCtrl if validation fails
    if (ctrl.value !== confirmCtrl.value) {
      confirmCtrl.setErrors({ notEqual: true });
    } else {
      confirmCtrl.setErrors(null);
    }
  }
}

function validateEmail(c: FormControl) {
  // let EMAIL_REGEXP = ...

  return EMAIL_REGEXP.test(c.value) ? null : {
    validateEmail: {
      valid: false
    }
  };
}

export class FormValidators {
  // Validates URL
  static urlValidator(url): any {
    if (url.pristine) {
      return null;
    }
    url.markAsTouched();
    if (URL_REGEXP.test(url.value)) {
      return null;
    }
    return {
      invalidUrl: true
    };
  }
  static emailValidator(c: FormControl) {
    return EMAIL_REGEXP.test(c.value) ? null : {
      validateEmail: {
        valid: false
      }
    };
  }
  static matchPassword(group, c1 = 'password', c2 = 'rePassword'): any {
    const password = group.controls[c1];
    const confirm = group.controls[c2];
    if (password.pristine || confirm.pristine) {
      return null;
    }
    group.markAsTouched();
    if (password.value === confirm.value) {
      return null;
    }
    return {
      invalidPassword: true
    };
  }
  static numberValidator(number): any {
    if (number.pristine) {
      return null;
    }

    number.markAsTouched();
    if (NUMBER_REGEXP.test(number.value)) {
      return null;
    }
    return {
      invalidNumber: true
    };
  }
  static someControlValidator: ValidatorFn = (group: FormGroup): ValidationErrors | null => {
    const isInvalid = Object.keys(group.controls).every((c) => {
      return !group.get(c).value
    })
    return group.controls && isInvalid ? { every: true } : null
  }
  static validationErrorToObject(ve: ValidationErrors): ValidationObject {
    return ve.reduce((p, c: ValidationErrors): ValidationObject => {
      if (!c.children || !c.children.length) {
        p[c.property] = {
          value: c.value,
          constraints: Object.keys(c.constraints)
            .map(key => {
              return capitalize(c.constraints[key]) + ".\u00a0";
            })
        }
      } else {
        p[c.property] = FormValidators.validationErrorToObject(c.children);
      }
      return p;
    }, {} as ValidationObject);
  }
}
