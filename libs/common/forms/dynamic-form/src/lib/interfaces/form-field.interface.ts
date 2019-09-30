import { FormValidator } from './form-validator.interface';
import { Observable } from 'rxjs';

export interface FormFieldOption {
  value: any;
  viewValue: string;
}
export type FormFieldOptions = string[] | FormFieldOption[]

export interface FormField {
  label?: string;
  name?: string;
  inputType?: string;
  options?: string[] | FormFieldOption[];
  asyncConfig?: {
    endpoint: string;
    value: string;
    viewValue: string;
  }
  options$?: Observable<any>
  collections?: any;
  type: string;
  value?: any;
  hint?: string;
  appearance?: 'standard' | 'outline';
  validations?: FormValidator[];
}
