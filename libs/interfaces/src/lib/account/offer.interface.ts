export interface IOffer {
  id: number;
  offerName: string;
  offerStartDate: string;
  offerEndDate: string;
  description: string;
  discountAmount: string;
  discountPercentage: string;
  durationMonths: number;
  durationEndDate: string;
  includes: {};
  prerequisites: {};
  subscriptions: {};
}
