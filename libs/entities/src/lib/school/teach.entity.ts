import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Instructor } from './instructor.entity';
import { Classroom } from './classroom.entity';
import { DropTeachReason } from './drop-teach-reason.entity';
import { TeachOutcome } from './teach-outcome.entity';

/**
 * A tabela de ensino é usada para armazenar informações sobre qual instrutor está ensinando qual classe.
 * 
 * Os atributos na tabela são:
 * @param instructor_id - é uma referência à tabela de instrutores.
 * @param classroom_id - é uma referência à tabela de classes.
 * @param start_date - é a data em que o instrutor começou a trabalhar nessa classe.
 * @param end_date - é a data em que o instrutor parou de trabalhar nessa classe. Não é obrigatório, porque não podemos saber com antecedência se o instrutor ensinará até a data de término da aula.
 * @param drop_teach_reason_id - é uma referência à tabela drop_teach_reason. Não é obrigatório porque o instrutor não pode deixar a aula.
 * @param teach_outcome_id - é uma referência à tabela teach_outcome_reason.
 */
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
