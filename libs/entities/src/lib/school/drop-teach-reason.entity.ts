import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Teach } from './teach.entity';

@Entity('drop_teach_reason')
export class DropTeachReason {
  @PrimaryGeneratedColumn({
    type: 'int',
    name: 'id'
  })
  id: number;

  @Column({
    type: 'varchar',
    nullable: false,
    length: 256,
    name: 'reason_text'
  })
  reasonText: string;

  @OneToMany(() => Teach, teach => teach.dropTeachReason, { onDelete: 'NO ACTION', onUpdate: 'NO ACTION' })
  teachs: Teach[];
}
