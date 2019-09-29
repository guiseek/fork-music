import { BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId } from 'typeorm';
import { Subscription } from './subscription.entity';
import { Plan } from './plan.entity';
import { Invoice } from './invoice.entity';


@Entity('plan_history')
@Index('plan_history_plan', ['plan'])
@Index('plan_history_subscription', ['subscription'])
export class PlanHistory {

  @PrimaryGeneratedColumn({
    type: 'int',
    name: 'id'
  })
  id: number;



  @ManyToOne(() => Subscription, (subscription: Subscription) => subscription.planHistorys, { nullable: false, onDelete: 'RESTRICT', onUpdate: 'RESTRICT' })
  @JoinColumn({ name: 'subscription_id' })
  subscription: Subscription | null;



  @ManyToOne(() => Plan, (plan: Plan) => plan.planHistorys, { nullable: false, onDelete: 'RESTRICT', onUpdate: 'RESTRICT' })
  @JoinColumn({ name: 'plan_id' })
  plan: Plan | null;


  @Column({
    type: 'date',
    nullable: false,
    name: 'date_start'
  })
  dateStart: string;


  @Column({
    type: 'date',
    nullable: true,
    name: 'date_end'
  })
  dateEnd: string | null;


  @Column({
    type: 'timestamp',
    nullable: false,
    default: () => 'CURRENT_TIMESTAMP',
    name: 'insert_ts'
  })
  insertTs: Date;



  @OneToMany(() => Invoice, (invoice: Invoice) => invoice.planHistory, { onDelete: 'RESTRICT', onUpdate: 'RESTRICT' })
  invoices: Invoice[];

}
