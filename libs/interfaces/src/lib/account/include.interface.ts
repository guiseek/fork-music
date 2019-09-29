import { IPlan } from './plan.interface';
import { IOffer } from './offer.interface';

export interface IInclude {
  id: number;
  offer: IOffer;
  plan: IPlan;
}
