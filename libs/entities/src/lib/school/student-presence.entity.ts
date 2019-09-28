import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { Student } from './student.entity';
import { ClassroomSchedule } from './classroom-schedule.entity';


@Entity('student_presence')
@Index('student_presence_classroom_schedule', ['classroomSchedule',])
export class StudentPresence {
  @ManyToOne(() => Student, student => student.studentPresences, { primary: true, nullable: false, onDelete: 'NO ACTION', onUpdate: 'NO ACTION' })
  @JoinColumn({ name: 'student_id' })
  student: Student | null;

  @ManyToOne(() => ClassroomSchedule, classroom_schedule => classroom_schedule.studentPresences, { primary: true, nullable: false, onDelete: 'NO ACTION', onUpdate: 'NO ACTION' })
  @JoinColumn({ name: 'classroom_schedule_id' })
  classroomSchedule: ClassroomSchedule | null;

  @Column({
    type: 'tinyint',
    nullable: false,
    width: 1,
    name: 'present'
  })
  present: boolean;
}
