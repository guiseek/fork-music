import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Attend } from './attend.entity';

@Entity('drop_attendance_reason')
export class DropAttendanceReason {
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

  @OneToMany(() => Attend, attend => attend.dropClassroomReason, { onDelete: 'NO ACTION', onUpdate: 'NO ACTION' })
  attends: Attend[];
}
