import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Teach } from './teach.entity';


@Entity('teach_outcome')
export class TeachOutcome {
  @PrimaryGeneratedColumn({
    type: 'int',
    name: 'id'
  })
  id: number;

  @Column({
    type: 'varchar',
    nullable: false,
    length: 256,
    name: 'outcome_text'
  })
  outcomeText: string;

  @OneToMany(() => Teach, teach => teach.teachOutcome, { onDelete: 'NO ACTION', onUpdate: 'NO ACTION' })
  teachs: Teach[];
}
