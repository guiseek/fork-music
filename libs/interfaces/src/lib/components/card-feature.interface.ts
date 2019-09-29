import { Subject } from 'rxjs';
import { FormField } from '@suite/common/forms/dynamic-form';
import { TableColumn } from './table-column.interface';
import { TableConfig } from './table-config.interface';
import { DialogConfig } from '@suite/cdk/dialog';

export interface CardFeature {
  title: string
  endpoint: string
  refresh?: Subject<unknown>
  fields?: FormField[]
  columns?: TableColumn[]
  tableConfig?: TableConfig
  dialog?: Partial<DialogConfig>
}