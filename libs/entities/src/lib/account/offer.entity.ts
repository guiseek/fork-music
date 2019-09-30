import { Column, Entity, Index, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Include } from './include.entity';
import { Prerequisite } from './prerequisite.entity';
import { Subscription } from './subscription.entity';


@Entity('offer')
@Index('offer_ak_1', ['offerName'], { unique: true })
export class Offer {

  @PrimaryGeneratedColumn({
    type: 'int',
    name: 'id'
  })
  id: number;


  @Column({
    type: 'varchar',
    nullable: false,
    unique: true,
    name: 'offer_name'
  })
  offerName: string;


  @Column({
    type: 'date',
    nullable: false,
    name: 'offer_start_date'
  })
  offerStartDate: string;


  @Column({
    type: 'date',
    nullable: true,
    name: 'offer_end_date'
  })
  offerEndDate: string | null;


  @Column({
    type: 'text',
    nullable: false,
    name: 'description'
  })
  description: string;


  @Column({
    type: 'decimal',
    nullable: true,
    precision: 8,
    scale: 2,
    name: 'discount_amount'
  })
  discountAmount: string | null;


  @Column({
    type: 'decimal',
    nullable: true,
    precision: 5,
    scale: 2,
    name: 'discount_percentage'
  })
  discountPercentage: string | null;


  @Column({
    type: 'int',
    nullable: true,
    name: 'duration_months'
  })
  durationMonths: number | null;


  @Column({
    type: 'date',
    nullable: true,
    name: 'duration_end_date'
  })
  durationEndDate: string | null;



  @OneToMany(() => Include, (include: Include) => include.offer, { onDelete: 'RESTRICT', onUpdate: 'RESTRICT' })
  includes: Include[];



  @OneToMany(() => Prerequisite, (prerequisite: Prerequisite) => prerequisite.offer, { onDelete: 'RESTRICT', onUpdate: 'RESTRICT' })
  prerequisites: Prerequisite[];



  @OneToMany(() => Subscription, (subscription: Subscription) => subscription.offer, { onDelete: 'RESTRICT', onUpdate: 'RESTRICT' })
  subscriptions: Subscription[];

}
