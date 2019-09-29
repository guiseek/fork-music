import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Teach } from './teach.entity';
import { OutcomeText } from '@suite/interfaces';

/**
 * A tabela teach_outcome descreve o sucesso do instrutor em um curso específico.
 * O outcome_text é o único atributo da tabela e é obrigatório.
 * Os valores possíveis para esta tabela podem ser:“em andamento”, “concluído com êxito”, “concluído parcialmente” e “não concluiu a aula”.
 */
@Entity('teach_outcome')
export class TeachOutcome {
  @PrimaryGeneratedColumn({
    type: 'int',
    name: 'id'
  })
  id: number;

  /**
   * @param outcomeText
   * @returns Retorna enum `OutcomeText` ou `string`
   */
  @Column({
    type: 'varchar',
    nullable: false,
    length: 256,
    name: 'outcome_text'
  })
  outcomeText: OutcomeText | string;

  @OneToMany(() => Teach, teach => teach.teachOutcome, { onDelete: 'NO ACTION', onUpdate: 'NO ACTION' })
  teachs: Teach[];
}
