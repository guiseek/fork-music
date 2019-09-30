import { Column, Entity, Index, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Plan } from './plan.entity';


@Entity('software')
@Index('software_ak_1', ['softwareName'], { unique: true })
export class Software {

  @PrimaryGeneratedColumn({
    type: 'int',
    name: 'id'
  })
  id: number;


  @Column({
    type: 'varchar',
    nullable: false,
    unique: true,
    name: 'software_name'
  })
  softwareName: string;


  @Column({
    type: 'text',
    nullable: true,
    name: 'details'
  })
  details: string | null;


  @Column({
    type: 'text',
    nullable: false,
    name: 'access_link'
  })
  accessLink: string;



  @OneToMany(() => Plan, (plan: Plan) => plan.software, { onDelete: 'RESTRICT', onUpdate: 'RESTRICT' })
  plans: Plan[];

}
