import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { Instructor } from './instructor.entity';
import { ClassroomSchedule } from './classroom-schedule.entity';

// export declare function Index(name: string, fields: (object?: any) => (any[] | {
//   [key: string]: number;
// }), options?: IndexOptions): Function;

// @Index('instructor_presence_classroom_schedule', { synchronize: false })
@Entity('instructor_presence')
@Index('instructor_presence_classroom_schedule', ['classroomSchedule'])
export class InstructorPresence {
  @ManyToOne(() => Instructor, instructor => instructor.instructorPresences, { primary: true, nullable: false, onDelete: 'NO ACTION', onUpdate: 'NO ACTION' })
  @JoinColumn({ name: 'instructor_id' })
  instructor: Instructor | null;

  @ManyToOne(() => ClassroomSchedule, classroom_schedule => classroom_schedule.instructorPresences, { primary: true, nullable: false, onDelete: 'NO ACTION', onUpdate: 'NO ACTION' })
  @JoinColumn({ name: 'classroom_schedule_id' })
  classroomSchedule: ClassroomSchedule | null;

  // @Index('classroomSchedule', { synchronize: false })
  @Column({
    type: 'tinyint',
    nullable: false,
    width: 1,
    name: 'present'
  })
  present: boolean;
}
