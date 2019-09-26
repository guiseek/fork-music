import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { IsOptional, IsDefined, IsString, IsNotEmpty, IsCurrency } from 'class-validator';
import { CrudValidationGroups } from '@nestjsx/crud';

const { CREATE, UPDATE } = CrudValidationGroups;


/**
 * @param id Identificador exclusivo para registro.
 * @param name O nome do prêmio.
 * @param amount A quantidade por lição a cobrar.
 * @param wage_amount O valor do prêmio de salário se estiver cobrando o prêmio de salário.
 */

@Entity('cost_premium')
export class CostPremium {
  @PrimaryGeneratedColumn()
  id: number;

  @IsOptional({ groups: [UPDATE] })
  @IsDefined({ groups: [CREATE] })
  @IsString({ always: true })
  @IsNotEmpty({ message: 'Obrigatório' })
  @Column({
    type: 'varchar',
    length: 200
  })
  name: string;

  @IsCurrency({
    allow_decimal: true
  }, {
    message: 'Valor inválido'
  })
  @Column({
    default: 10.50
  })
  amount: number

  @IsCurrency({
    allow_decimal: true
  }, {
    message: 'Valor inválido'
  })
  @Column({
    name: 'wage_amount',
    default: 5.25
  })
  wageAmount: number
}
