import { FormValidator } from './form-validator.interface';

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
  collections?: any;
  type: string;
  value?: any;
  hint?: string;
  appearance?: 'standard' | 'outline';
  validations?: FormValidator[];
}
