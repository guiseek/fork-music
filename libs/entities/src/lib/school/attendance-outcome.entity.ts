import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Attend } from './attend.entity';
import { OutcomeText } from '@suite/interfaces';

/**
 * Contém descrições sobre a atividade do aluno em um determinado curso.
 * O outcome_text é o único atributo na tabela e é obrigatório.
 * Um conjunto de valores possíveis é: "em andamento", "concluído com êxito", "concluído parcialmente" e "não concluiu a aula".
 */
@Entity('attendance_outcome')
export class AttendanceOutcome {
  @PrimaryGeneratedColumn({
    type: 'int',
    name: 'id'
  })
  id: number;

  /**
   * Um conjunto de valores possíveis é:
   * "em andamento", "concluído com êxito", "concluído parcialmente" e "não concluiu a aula".
   */
  @Column({
    type: 'varchar',
    nullable: false,
    length: 256,
    name: 'outcome_text'
  })
  outcomeText: OutcomeText;

  @OneToMany(() => Attend, attend => attend.attendanceOutcome, { onDelete: 'NO ACTION', onUpdate: 'NO ACTION' })
  attends: Attend[];
}
