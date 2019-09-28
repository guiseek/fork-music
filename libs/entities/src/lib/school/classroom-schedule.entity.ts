import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, Timestamp } from 'typeorm';
import { Classroom } from './classroom.entity';
import { InstructorPresence } from './instructor-presence.entity';
import { StudentPresence } from './student-presence.entity';

/**
 * Solve default Invalid 'end_time'
 * set @@session.explicit_defaults_for_timestamp=on;
 */
@Entity('classroom_schedule')
@Index('classroom_schedule_classroom', ['classroom'])
export class ClassroomSchedule {
  @PrimaryGeneratedColumn({
    type: 'int',
    name: 'id'
  })
  id: number;

  @ManyToOne(() => Classroom, classroom => classroom.classroomSchedules, { nullable: false, onDelete: 'NO ACTION', onUpdate: 'NO ACTION' })
  @JoinColumn({ name: 'classroom_id' })
  classroom: Classroom | null;

  @Column({
    type: 'timestamp',
    nullable: false,
    name: 'start_time'
  })
  startTime: Date;

  @Column({
    type: 'timestamp',
    nullable: true,
    name: 'end_time'
  })
  endTime: Date;

  @OneToMany(() => InstructorPresence, instructor_presence => instructor_presence.classroomSchedule, { onDelete: 'NO ACTION', onUpdate: 'NO ACTION' })
  instructorPresences: InstructorPresence[];

  @OneToMany(() => StudentPresence, student_presence => student_presence.classroomSchedule, { onDelete: 'NO ACTION', onUpdate: 'NO ACTION' })
  studentPresences: StudentPresence[];
}
