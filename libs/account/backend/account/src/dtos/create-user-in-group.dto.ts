import { UserGroup, UserAccount } from '@suite/entities';

export class CreateUserInGroupDto {
  userGroup: UserGroup;
  userAccount: UserAccount;
  groupAdmin: boolean;
}