import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { Student } from './student.entity';
import { ClassroomSchedule } from './classroom-schedule.entity';

/**
 * Armazena dados sobre a presença do aluno em uma aula específica.
 * Podemos assumir que, para cada aula, o instrutor notará a presença e / ou ausência de todos os alunos.
 * 
 * Os atributos na tabela são:
 * @param student - é uma referência à tabela de alunos
 * @param classroomSchedule - é uma referência à tabela classroom_schedule
 * @param present - é uma marcação booleana se o aluno está presente na palestra ou não
 * 
 * Poderíamos monitorar a presença dos alunos em uma turma específica com uma consulta
 * como a seguinte (supondo que @id_classroom contenha o ID da turma que queremos).
 */

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
