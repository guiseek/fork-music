import { IUserGroup } from './user-group.interface';
import { IPlan } from './plan.interface';
import { IOffer } from './offer.interface';
import { IInvoice } from './invoice.interface';
import { IPlanHistory } from './plan-history.interface';

export interface ISubscription {
  id: number;
  userGroup: IUserGroup;
  trialPeriodStartDate: string;
  trialPeriodEndDate: string;
  subscribeAfterTrial: boolean;
  currentPlan: IPlan;
  offer: IOffer;
  offerStartDate: string;
  offerEndDate: string;
  dateSubscribed: string;
  validTo: string;
  dateUnsubscribed: string;
  insertTs: any;
  invoices: IInvoice[] | {};
  planHistorys: IPlanHistory[] | {};
}
