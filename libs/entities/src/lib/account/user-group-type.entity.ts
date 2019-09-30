import { Column, Entity, Index, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Plan } from './plan.entity';
import { UserGroup } from './user-group.entity';


@Entity('user_group_type')
@Index('user_group_type_ak_1', ['typeName'], { unique: true })
export class UserGroupType {

  @PrimaryGeneratedColumn({
    type: 'int',
    name: 'id'
  })
  id: number;


  @Column('varchar', {
    nullable: false,
    unique: true,
    length: 128,
    name: 'type_name'
  })
  typeName: string;


  @Column('int', {
    nullable: false,
    name: 'members_min'
  })
  membersMin: number;


  @Column('int', {
    nullable: false,
    name: 'members_max'
  })
  membersMax: number;



  @OneToMany(() => Plan, (plan: Plan) => plan.userGroupType, { onDelete: 'RESTRICT', onUpdate: 'RESTRICT' })
  plans: Plan[];



  @OneToMany(() => UserGroup, (userGroup: UserGroup) => userGroup.userGroupType, { onDelete: 'RESTRICT', onUpdate: 'RESTRICT' })
  userGroups: UserGroup[];

}
