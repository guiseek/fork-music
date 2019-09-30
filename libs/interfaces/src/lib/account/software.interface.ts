import { IPlan } from './plan.interface';

export interface ISoftware {
  id: number;
  softwareName: string;
  details: string;
  accessLink: string;
  plans: IPlan[] | {};
}
