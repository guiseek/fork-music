import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Instructor } from './instructor.entity';
import { Classroom } from './classroom.entity';
import { DropTeachReason } from './drop-teach-reason.entity';
import { TeachOutcome } from './teach-outcome.entity';


@Entity('teach')
@Index('teach_classroom', ['classroom',])
@Index('teach_drop_teach_reason', ['dropTeachReason',])
@Index('teach_instructor', ['instructor',])
@Index('teach_teach_outcome', ['teachOutcome',])
export class Teach {
  @PrimaryGeneratedColumn({
    type: 'int',
    name: 'id'
  })
  id: number;

  @ManyToOne(() => Instructor, instructor => instructor.teachs, { nullable: false, onDelete: 'NO ACTION', onUpdate: 'NO ACTION' })
  @JoinColumn({ name: 'instructor_id' })
  instructor: Instructor | null;

  @ManyToOne(() => Classroom, classroom => classroom.teachs, { nullable: false, onDelete: 'NO ACTION', onUpdate: 'NO ACTION' })
  @JoinColumn({ name: 'classroom_id' })
  classroom: Classroom | null;

  @Column({
    type: 'date',
    nullable: false,
    name: 'start_date'
  })
  startDate: string;

  @Column({
    type: 'date',
    nullable: true,
    name: 'end_date'
  })
  endDate: string | null;

  @ManyToOne(() => DropTeachReason, drop_teach_reason => drop_teach_reason.teachs, { onDelete: 'NO ACTION', onUpdate: 'NO ACTION' })
  @JoinColumn({ name: 'drop_teach_reason_id' })
  dropTeachReason: DropTeachReason | null;

  @ManyToOne(() => TeachOutcome, teach_outcome => teach_outcome.teachs, { nullable: false, onDelete: 'NO ACTION', onUpdate: 'NO ACTION' })
  @JoinColumn({ name: 'teach_outcome_id' })
  teachOutcome: TeachOutcome | null;
}
