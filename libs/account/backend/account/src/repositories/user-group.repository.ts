import { UserGroup } from "@suite/entities";
import { Repository, EntityRepository } from 'typeorm';

// import { TransactionRepository } from 'typeorm';
// import { InGroup } from '@suite/entities';

// @TransactionRepository((InGroup) => InGroup)
// export class UserGroupepository {}
@EntityRepository(UserGroup)
export class UserGroupRepository extends Repository<UserGroup> {
  createOne(userGroupType, customerInvoiceData = '') {
    return this.save({
      userGroupType,
      customerInvoiceData
    }, { transaction: true })
  }
}