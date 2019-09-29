import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Attend } from './attend.entity';

/**
 * Contém os vários motivos pelos quais um aluno pode abandonar um curso.
 * Ele possui apenas um atributo, reason_text, e é obrigatório.
 * Um exemplo de conjunto de valores pode incluir: “doença”, “perda de interesse”, “não tem tempo suficiente” e “outras razões”.
 */
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
