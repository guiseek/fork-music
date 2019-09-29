import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { UserGroup } from './user-group.entity';
import { UserAccount } from './user-account.entity';


@Entity('in_group')
@Index('in_group_ak_1', ['userGroup', 'userAccount', 'timeAdded',], { unique: true })
@Index('in_group_user_account', ['userAccount',])
export class InGroup {

  @PrimaryGeneratedColumn({
    type: 'int',
    name: 'id'
  })
  id: number;



  @ManyToOne(() => UserGroup, (userGroup: UserGroup) => userGroup.inGroups, { nullable: false, onDelete: 'RESTRICT', onUpdate: 'RESTRICT' })
  @JoinColumn({ name: 'user_group_id' })
  userGroup: UserGroup | null;



  @ManyToOne(() => UserAccount, (userAccount: UserAccount) => userAccount.inGroups, { nullable: false, onDelete: 'RESTRICT', onUpdate: 'RESTRICT' })
  @JoinColumn({ name: 'user_account_id' })
  userAccount: UserAccount | null;


  @Column({
    type: 'timestamp',
    nullable: false,
    default: () => 'CURRENT_TIMESTAMP',
    name: 'time_added'
  })
  timeAdded: Date;


  @Column({
    type: 'timestamp',
    nullable: true,
    name: 'time_removed'
  })
  timeRemoved: Date | null;


  @Column({
    type: 'tinyint',
    nullable: false,
    width: 1,
    name: 'group_admin'
  })
  groupAdmin: boolean;

}
