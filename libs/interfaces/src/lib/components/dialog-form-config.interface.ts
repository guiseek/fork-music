import { DialogConfig } from '@suite/cdk/dialog';
import { FormField } from '@suite/common/forms/dynamic-form';

export interface DialogFormConfig extends DialogConfig {
  fields: FormField
}