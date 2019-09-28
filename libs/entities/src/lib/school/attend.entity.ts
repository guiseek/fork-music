import { Entity, Index, PrimaryGeneratedColumn, ManyToOne, JoinColumn, Column } from 'typeorm';
import { Student } from './student.entity';
import { AttendanceOutcome } from './attendance-outcome.entity';
import { Classroom } from './classroom.entity';
import { DropAttendanceReason } from './drop-attendance-reason.entity';


/**
 * A tabela de participação armazena informações sobre qual aluno
 * participou de qual aula e o resultado final.
 */
@Entity('attend')
@Index('attend_attendance_outcome', ['attendanceOutcome'])
@Index('attend_classroom', ['classroom'])
@Index('attend_drop_classroom_reason', ['dropClassroomReason'])
@Index('attend_student', ['student'])
export class Attend {
  @PrimaryGeneratedColumn({
    type: 'int',
    name: 'id'
  })
  id: number;

  @ManyToOne(type => Student, student => student.attends, { nullable: false, onDelete: 'NO ACTION', onUpdate: 'NO ACTION' })
  @JoinColumn({ name: 'student_id' })
  student: Student | null;

  @ManyToOne(type => Classroom, classroom => classroom.attends, { nullable: false, onDelete: 'NO ACTION', onUpdate: 'NO ACTION' })
  @JoinColumn({ name: 'classroom_id' })
  classroom: Classroom | null;

  /**
   * é a data em que o aluno começou a frequentar essa aula
   */
  @Column({
    type: 'date',
    nullable: false,
    name: 'classroom_enrollment_date'
  })
  classroomEnrollmentDate: string;

  /**
   * a data em que o aluno saiu da aula.
   * Este atributo só terá valor se o aluno abandonar a turma antes da data de término da aula.
   * Nesse caso, o valor do atributo drop_class_reason_id também deve ser definido.
   */
  @Column({
    type: 'date',
    nullable: true,
    name: 'classroom_drop_date'
  })
  classroomDropDate: string | null;

  @ManyToOne(type => DropAttendanceReason, drop_attendance_reason => drop_attendance_reason.attends, { onDelete: 'NO ACTION', onUpdate: 'NO ACTION' })
  @JoinColumn({ name: 'drop_classroom_reason_id' })
  dropClassroomReason: DropAttendanceReason | null;

  @ManyToOne(type => AttendanceOutcome, attendance_outcome => attendance_outcome.attends, { nullable: false, onDelete: 'NO ACTION', onUpdate: 'NO ACTION' })
  @JoinColumn({ name: 'attendance_outcome_id' })
  attendanceOutcome: AttendanceOutcome | null;
}
