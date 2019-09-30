import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { UserGroup } from './user-group.entity';
import { Plan } from './plan.entity';
import { Offer } from './offer.entity';
import { Invoice } from './invoice.entity';
import { PlanHistory } from './plan-history.entity';


@Entity('subscription')
@Index('subscription_offer', ['offer'])
@Index('subscription_plan', ['currentPlan'])
@Index('subscription_user_group', ['userGroup'])
export class Subscription {

  @PrimaryGeneratedColumn({
    type: 'int',
    name: 'id'
  })
  id: number;



  @ManyToOne(() => UserGroup, (userGroup: UserGroup) => userGroup.subscriptions, { nullable: false, onDelete: 'RESTRICT', onUpdate: 'RESTRICT' })
  @JoinColumn({ name: 'user_group_id' })
  userGroup: UserGroup | null;


  @Column({
    type: 'date',
    nullable: true,
    name: 'trial_period_start_date'
  })
  trialPeriodStartDate: string | null;


  @Column({
    type: 'date',
    nullable: true,
    name: 'trial_period_end_date'
  })
  trialPeriodEndDate: string | null;


  @Column({
    type: 'tinyint',
    nullable: false,
    width: 1,
    name: 'subscribe_after_trial'
  })
  subscribeAfterTrial: boolean;



  @ManyToOne(() => Plan, (plan: Plan) => plan.subscriptions, { nullable: false, onDelete: 'RESTRICT', onUpdate: 'RESTRICT' })
  @JoinColumn({ name: 'current_plan_id' })
  currentPlan: Plan | null;



  @ManyToOne(() => Offer, (offer: Offer) => offer.subscriptions, { onDelete: 'RESTRICT', onUpdate: 'RESTRICT' })
  @JoinColumn({ name: 'offer_id' })
  offer: Offer | null;


  @Column({
    type: 'date',
    nullable: true,
    name: 'offer_start_date'
  })
  offerStartDate: string | null;


  @Column({
    type: 'date',
    nullable: true,
    name: 'offer_end_date'
  })
  offerEndDate: string | null;


  @Column({
    type: 'date',
    nullable: false,
    name: 'date_subscribed'
  })
  dateSubscribed: string;


  @Column({
    type: 'date',
    nullable: false,
    name: 'valid_to'
  })
  validTo: string;


  @Column({
    type: 'date',
    nullable: true,
    name: 'date_unsubscribed'
  })
  dateUnsubscribed: string | null;


  @Column({
    type: 'timestamp',
    nullable: false,
    default: () => 'CURRENT_TIMESTAMP',
    name: 'insert_ts'
  })
  insertTs: Date;



  @OneToMany(() => Invoice, (invoice: Invoice) => invoice.subscription, { onDelete: 'RESTRICT', onUpdate: 'RESTRICT' })
  invoices: Invoice[];



  @OneToMany(() => PlanHistory, (planHistory: PlanHistory) => planHistory.subscription, { onDelete: 'RESTRICT', onUpdate: 'RESTRICT' })
  planHistorys: PlanHistory[];

}
