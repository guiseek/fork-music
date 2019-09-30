import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Plan } from './plan.entity';
import { Option } from './option.entity';


@Entity('option_included')
@Index('option_included_ak_1', ['plan', 'option', 'dateAdded'], { unique: true })
@Index('option_included_option', ['option'])
export class OptionIncluded {

  @PrimaryGeneratedColumn({
    type: 'int',
    name: 'id'
  })
  id: number;



  @ManyToOne(() => Plan, (plan: Plan) => plan.optionIncludeds, { nullable: false, onDelete: 'RESTRICT', onUpdate: 'RESTRICT' })
  @JoinColumn({ name: 'plan_id' })
  plan: Plan | null;



  @ManyToOne(() => Option, (option: Option) => option.optionIncludeds, { nullable: false, onDelete: 'RESTRICT', onUpdate: 'RESTRICT' })
  @JoinColumn({ name: 'option_id' })
  option: Option | null;


  @Column({
    type: 'date',
    nullable: false,
    name: 'date_added'
  })
  dateAdded: string;


  @Column({
    type: 'date',
    nullable: true,
    name: 'date_removed'
  })
  dateRemoved: string | null;

}
