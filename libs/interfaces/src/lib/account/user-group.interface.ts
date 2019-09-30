import { IUserGroupType } from './user-group-type.interface';
import { IInGroup } from './in-group.interface';
import { ISubscription } from './subscription.interface';

export interface IUserGroup {
  id: number;
  userGroupType: IUserGroupType;
  customerInvoiceData: string;
  insertTs: any;
  inGroups: IInGroup[] | {};
  subscriptions: ISubscription[] | {};
}
