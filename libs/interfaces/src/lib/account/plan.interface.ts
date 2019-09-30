import { ISoftware } from './software.interface';
import { IUserGroupType } from './user-group-type.interface';

export interface IPlan {
  id: number;
  planName: string;
  software: ISoftware;
  userGroupType: IUserGroupType;
  currentPrice: string;
  insertTs: any;
  isActive: boolean;
  includes: {};
  optionIncludeds: {};
  planHistorys: {};
  prerequisites: {};
  subscriptions: {};
}
