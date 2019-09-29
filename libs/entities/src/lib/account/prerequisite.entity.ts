import { Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Offer } from './offer.entity';
import { Plan } from './plan.entity';

@Entity('prerequisite')
@Index('prerequisite_ak_1', ['offer', 'plan'], { unique: true })
@Index('prerequisite_plan', ['plan'])
export class Prerequisite {
  @PrimaryGeneratedColumn({
    type: 'int',
    name: 'id'
  })
  id: number;



  @ManyToOne(() => Offer, (offer: Offer) => offer.prerequisites, { nullable: false, onDelete: 'RESTRICT', onUpdate: 'RESTRICT' })
  @JoinColumn({ name: 'offer_id' })
  offer: Offer | null;



  @ManyToOne(() => Plan, (plan: Plan) => plan.prerequisites, { nullable: false, onDelete: 'RESTRICT', onUpdate: 'RESTRICT' })
  @JoinColumn({ name: 'plan_id' })
  plan: Plan | null;

}
