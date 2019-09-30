import { IPlan } from './plan.interface';
import { IUserGroup } from './user-group.interface';

export interface IUserGroupType {
  id: number;
  typeName: string;
  membersMin: number;
  membersMax: number;
  plans: IPlan[] | {};
  userGroups: IUserGroup[] | {};
}
