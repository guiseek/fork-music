import { IOffer } from './offer.interface';
import { IPlan } from './plan.interface';

export interface IPrerequisite {
  id: number;
  offer: IOffer;
  plan: IPlan;
}
