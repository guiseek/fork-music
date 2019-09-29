import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Subscription } from './subscription.entity';
import { PlanHistory } from './plan-history.entity';


@Entity('invoice')
@Index('payment_plan_history', ['planHistory'])
@Index('payment_subscription', ['subscription'])
export class Invoice {

  @PrimaryGeneratedColumn({
    type: 'int',
    name: 'id'
  })
  id: number;


  @Column({
    type: 'text',
    nullable: false,
    name: 'customer_invoice_data'
  })
  customerInvoiceData: string;



  @ManyToOne(() => Subscription, (subscription: Subscription) => subscription.invoices, { nullable: false, onDelete: 'RESTRICT', onUpdate: 'RESTRICT' })
  @JoinColumn({ name: 'subscription_id' })
  subscription: Subscription | null;



  @ManyToOne(() => PlanHistory, (planHistory: PlanHistory) => planHistory.invoices, { nullable: false, onDelete: 'RESTRICT', onUpdate: 'RESTRICT' })
  @JoinColumn({ name: 'plan_history_id' })
  planHistory: PlanHistory | null;


  @Column({
    type: 'date',
    nullable: false,
    name: 'invoice_period_start_date'
  })
  invoicePeriodStartDate: string;


  @Column({
    type: 'date',
    nullable: false,
    name: 'invoice_period_end_date'
  })
  invoicePeriodEndDate: string;


  @Column({
    type: 'varchar',
    nullable: false,
    name: 'invoice_description'
  })
  invoiceDescription: string;


  @Column({
    type: 'decimal',
    nullable: false,
    precision: 8,
    scale: 2,
    name: 'invoice_amount'
  })
  invoiceAmount: string;


  @Column({
    type: 'timestamp',
    nullable: false,
    default: () => 'CURRENT_TIMESTAMP',
    name: 'invoice_created_ts'
  })
  invoiceCreatedTs: Date;


  @Column({
    type: 'timestamp',
    nullable: false,
    default: () => 'CURRENT_TIMESTAMP',
    name: 'invoice_due_ts'
  })
  invoiceDueTs: Date;


  @Column({
    type: 'timestamp',
    nullable: true,
    name: 'invoice_paid_ts'
  })
  invoicePaidTs: Date | null;

}
