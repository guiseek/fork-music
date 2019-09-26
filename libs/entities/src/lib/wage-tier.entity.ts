import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { IsString, IsNotEmpty, MaxLength } from 'class-validator';
import { Employee } from './employee.entity';

@Entity('wage_tiers')
export class WageTier {
  @PrimaryGeneratedColumn()
  id: number;

  @IsString({ always: true })
  @IsNotEmpty({ message: 'Obrigatório' })
  @MaxLength(200, { message: 'Máximo de 200' })
  @Column({
    type: 'varchar',
    length: 200
  })
  name: string;

  @OneToMany(type => Employee, employee => employee.wageTier, { cascade: true })
  employees: Employee[];
  // @OneToMany(() => Employee, (employee: Employee) => employee.wageTier, { onDelete: 'NO ACTION', onUpdate: 'NO ACTION' })
  // employees: Employee[];
}
