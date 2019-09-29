import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Software } from './software.entity';
import { UserGroupType } from './user-group-type.entity';
import { Include } from './include.entity';
import { OptionIncluded } from './option-included.entity';
import { PlanHistory } from './plan-history.entity';
import { Prerequisite } from './prerequisite.entity';
import { Subscription } from './subscription.entity';


@Entity('plan')
@Index('plan_ak_1', ['planName', 'software'], { unique: true })
@Index('plan_software', ['software'])
@Index('plan_user_group_type', ['userGroupType'])
export class Plan {

  @PrimaryGeneratedColumn({
    type: 'int',
    name: 'id'
  })
  id: number;


  @Column({
    type: 'varchar',
    nullable: false,
    name: 'plan_name'
  })
  planName: string;



  @ManyToOne(() => Software, (software: Software) => software.plans, { nullable: false, onDelete: 'RESTRICT', onUpdate: 'RESTRICT' })
  @JoinColumn({ name: 'software_id' })
  software: Software | null;



  @ManyToOne(() => UserGroupType, (userGroupType: UserGroupType) => userGroupType.plans, { nullable: false, onDelete: 'RESTRICT', onUpdate: 'RESTRICT' })
  @JoinColumn({ name: 'user_group_type_id' })
  userGroupType: UserGroupType | null;


  @Column({
    type: 'decimal',
    nullable: false,
    precision: 8,
    scale: 2,
    name: 'current_price'
  })
  currentPrice: string;


  @Column({
    type: 'timestamp',
    nullable: false,
    default: () => 'CURRENT_TIMESTAMP',
    name: 'insert_ts'
  })
  insertTs: Date;


  @Column({
    type: 'tinyint',
    nullable: false,
    width: 1,
    name: 'is_active'
  })
  isActive: boolean;



  @OneToMany(() => Include, (include: Include) => include.plan, { onDelete: 'RESTRICT', onUpdate: 'RESTRICT' })
  includes: Include[];



  @OneToMany(() => OptionIncluded, (optionIncluded: OptionIncluded) => optionIncluded.plan, { onDelete: 'RESTRICT', onUpdate: 'RESTRICT' })
  optionIncludeds: OptionIncluded[];



  @OneToMany(() => PlanHistory, (planHistory: PlanHistory) => planHistory.plan, { onDelete: 'RESTRICT', onUpdate: 'RESTRICT' })
  planHistorys: PlanHistory[];



  @OneToMany(() => Prerequisite, (prerequisite: Prerequisite) => prerequisite.plan, { onDelete: 'RESTRICT', onUpdate: 'RESTRICT' })
  prerequisites: Prerequisite[];



  @OneToMany(() => Subscription, (subscription: Subscription) => subscription.currentPlan, { onDelete: 'RESTRICT', onUpdate: 'RESTRICT' })
  subscriptions: Subscription[];

}
