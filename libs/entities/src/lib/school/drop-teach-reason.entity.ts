import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Teach } from './teach.entity';

/**
 * Contém um conjunto de explicações possíveis para
 * o motivo pelo qual o instrutor terminou o ensino antes da data final.
 * Existe apenas um atributo obrigatório:
 * @param reason_text. Isso pode ser “doença”, “movido para outro projeto / trabalho”, “sair” ou “outro motivo”.
 */
@Entity('drop_teach_reason')
export class DropTeachReason {
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

  @OneToMany(() => Teach, teach => teach.dropTeachReason, { onDelete: 'NO ACTION', onUpdate: 'NO ACTION' })
  teachs: Teach[];
}
