import { IInGroup } from './in-group.interface';

export interface IUserAccount {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  username?: string;
  password?: string;
  confirmationCode?: string;
  confirmationTime?: any;
  insertTs?: any;
  inGroups?: IInGroup[] | {};
}
