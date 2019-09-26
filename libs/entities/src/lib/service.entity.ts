import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { IsOptional, IsDefined, IsString, IsNotEmpty, IsCurrency } from 'class-validator';
import { CrudValidationGroups } from '@nestjsx/crud';

const { CREATE, UPDATE } = CrudValidationGroups;

@Entity('services')
export class Service {
  @PrimaryGeneratedColumn()
  id: number;

  @IsOptional({ groups: [UPDATE] })
  @IsDefined({ groups: [CREATE] })
  @IsString({ always: true })
  @IsNotEmpty({ message: 'Obrigatório' })
  @Column({
    name: 'name'
  })
  name: string;

  @IsCurrency({
    allow_decimal: true
  })
  @Column({
    name: 'default_cost',
    default: 40
  })
  defaultCost: number

  @IsCurrency({
    allow_decimal: true
  })
  @Column({
    name: 'default_wage',
    default: 25.50
  })
  defaultWage: number

  @Column({
    default: null,
    nullable: true
  })
  archived: boolean
}
