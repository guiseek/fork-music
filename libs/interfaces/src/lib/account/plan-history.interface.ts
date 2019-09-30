import { ISubscription } from './subscription.interface';
import { IPlan } from './plan.interface';

export interface IPlanHistory {
  id: number;
  subscription: ISubscription;
  plan: IPlan;
  dateStart: string;
  dateEnd: string;
  insertTs: any;
  invoices: {};
}
