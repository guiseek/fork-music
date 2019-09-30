import { IUserGroup } from './user-group.interface';
import { IUserAccount } from './user-account.interface';

export interface IInGroup {
  id: number;
  userGroup: IUserGroup;
  userAccount: IUserAccount;
  timeAdded: any;
  timeRemoved: any;
  groupAdmin: boolean;
}
