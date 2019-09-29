import { Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Offer } from './offer.entity';
import { Plan } from './plan.entity';


@Entity('include')
@Index('include_ak_1', ['offer', 'plan'], { unique: true })
@Index('include_plan', ['plan'])
export class Include {

  @PrimaryGeneratedColumn({
    type: 'int',
    name: 'id'
  })
  id: number;



  @ManyToOne(() => Offer, (offer: Offer) => offer.includes, { nullable: false, onDelete: 'RESTRICT', onUpdate: 'RESTRICT' })
  @JoinColumn({ name: 'offer_id' })
  offer: Offer | null;



  @ManyToOne(() => Plan, (plan: Plan) => plan.includes, { nullable: false, onDelete: 'RESTRICT', onUpdate: 'RESTRICT' })
  @JoinColumn({ name: 'plan_id' })
  plan: Plan | null;

}
