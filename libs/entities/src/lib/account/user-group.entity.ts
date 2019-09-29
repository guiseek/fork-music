import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { UserGroupType } from './user-group-type.entity';
import { InGroup } from './in-group.entity';
import { Subscription } from './subscription.entity';


@Entity('user_group')
@Index('user_group_user_group_type', ['userGroupType',])
export class UserGroup {

  @PrimaryGeneratedColumn({
    type: 'int',
    name: 'id'
  })
  id: number;



  @ManyToOne(() => UserGroupType, (userGroupType: UserGroupType) => userGroupType.userGroups, { nullable: false, onDelete: 'RESTRICT', onUpdate: 'RESTRICT' })
  @JoinColumn({ name: 'user_group_type_id' })
  userGroupType: UserGroupType | null;


  @Column({
    type: 'text',
    nullable: false,
    name: 'customer_invoice_data'
  })
  customerInvoiceData: string;


  @Column({
    type: 'timestamp',
    nullable: false,
    default: () => 'CURRENT_TIMESTAMP',
    name: 'insert_ts'
  })
  insertTs: Date;



  @OneToMany(() => InGroup, (inGroup: InGroup) => inGroup.userGroup, { onDelete: 'RESTRICT', onUpdate: 'RESTRICT' })
  inGroups: InGroup[];



  @OneToMany(() => Subscription, (subscription: Subscription) => subscription.userGroup, { onDelete: 'RESTRICT', onUpdate: 'RESTRICT' })
  subscriptions: Subscription[];

}
