import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { Instructor } from './instructor.entity';
import { ClassroomSchedule } from './classroom-schedule.entity';

// export declare function Index(name: string, fields: (object?: any) => (any[] | {
//   [key: string]: number;
// }), options?: IndexOptions): Function;


/**
 * A tabela "instructor_presence" usa a mesma lógica que a tabela "student_presence",
 * mas aqui queremos focar nos instrutores.
 * 
 * Os atributos na tabela são:
 * @param instructor - é uma referência à tabela de instrutores
 * @param classroomSchedule - é uma referência à tabela class_schedule
 * @param present - é um valor booleano que representa se o instrutor presente na palestra ou não
 * 
 * Poderíamos usar a consulta abaixo para monitorar a atividade do instrutor na aula:
 * @file Em `/docs/queries/instructor_presence.sql` contém a consulta
 */

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
