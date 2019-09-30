import { FormField } from '@suite/common/forms/dynamic-form';

export interface FormConfig {
  updateOn?: 'blur' | 'change' | 'submit'
  actions?: {
    reset?: boolean
    disableInvalid?: boolean
  }
}
export interface FormBackendConfig extends FormConfig {
  endpoint: string
  fields: FormField[]
  // [P in keyof T]?: T[P];  
}
