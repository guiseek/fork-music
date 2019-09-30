import { ISubscription } from './subscription.interface';
import { IPlanHistory } from './plan-history.interface';

export interface IInvoice {
  id: number;
  customerInvoiceData: string;
  subscription: ISubscription;
  planHistory: IPlanHistory;
  invoicePeriodStartDate: string;
  invoicePeriodEndDate: string;
  invoiceDescription: string;
  invoiceAmount: string;
  invoiceCreatedTs: any;
  invoiceDueTs: any;
  invoicePaidTs: any;
}
