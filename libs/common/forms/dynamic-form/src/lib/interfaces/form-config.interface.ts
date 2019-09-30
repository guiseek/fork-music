import { FormField } from './form-field.interface';

export interface FormBackendConfig extends FormConfig {
  endpoint: string
  fields: FormField[]
  // [P in keyof T]?: T[P];  
}

export interface FormConfig {
  updateOn?: 'blur' | 'change' | 'submit'
  actions?: {
    reset?: boolean
    disableInvalid?: boolean
  }
}
