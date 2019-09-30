import { IOptionIncluded } from './option-included.interface';

export interface IOption {
  id: number;
  optionName: string;
  optionIncludeds: IOptionIncluded[] | {};
}
