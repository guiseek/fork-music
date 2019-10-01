import { FormField } from '@suite/common/forms/dynamic-form';

export type formBackendMethod = 'GET' | 'POST'

export interface FormConfig {
  updateOn?: 'blur' | 'change' | 'submit'
  actions?: {
    reset?: boolean
    disableInvalid?: boolean
  }
}
export interface FormBackendConfig extends FormConfig {
  endpoint: string
  method?: formBackendMethod
  fields: FormField[]
  // [P in keyof T]?: T[P];  
}
