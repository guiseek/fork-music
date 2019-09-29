import { IPlan } from './plan.interface';
import { IOption } from './option.interface';

export interface IOptionIncluded {
  id: number;
  plan: IPlan;
  option: IOption;
  dateAdded: string;
  dateRemoved: string;
}
