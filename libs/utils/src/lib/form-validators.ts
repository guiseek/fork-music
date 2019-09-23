import { ValidatorFn, ValidationErrors, FormGroup } from '@angular/forms';

const URL_REGEXP = /^(http?|https):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/
const NUMBER_REGEXP = /^-?[\d.]+(?:e-?\d+)?$/

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
}
