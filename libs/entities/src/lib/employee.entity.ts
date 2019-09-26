import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { IsString, IsNotEmpty, IsEnum, IsBoolean, MaxLength, IsEmail, IsDate, IsDateString, IsMobilePhone } from 'class-validator';
import { EmployeeType } from '@suite/interfaces';
import { WageTier } from './entities';
import { ApiModelPropertyOptional, ApiModelProperty } from '@nestjs/swagger';

@Entity('employees')
// @Index('fk_employees_wage_tiers_idx', ['wageTier',])
export class Employee {
  @PrimaryGeneratedColumn()
  id: number;

  @ApiModelProperty({
    type: EmployeeType,
    nullable: true,
    default: 'Teacher'
  })
  @IsEnum(EmployeeType, {
    message: 'Inválido'
  })
  @IsNotEmpty({ message: 'Função obrigatório' })
  @Column({
    type: 'enum',
    nullable: true,
    default: 'Teacher',
    enum: ['Teacher', 'Staff'],
    name: 'employee_type'
  })
  employeeType: string;

  @IsBoolean({ message: 'É professor?' })
  @Column({
    type: 'boolean',
    nullable: true,
    default: true,
    name: 'include_as_teacher'
  })
  includeAsTeacher: boolean;


  @IsString({ always: true, message: 'Deve ser texto' })
  @IsNotEmpty({ message: 'Nome obrigatório' })
  @MaxLength(45, { message: 'Máximo de 45 caracteres' })
  @Column({
    type: 'varchar',
    nullable: false,
    length: 45,
    name: 'first_name'
  })
  firstName: string;


  @IsString({ always: true, message: 'Deve ser texto' })
  @IsNotEmpty({ message: 'Sobrenome brigatório' })
  @MaxLength(45, { message: 'Máximo de 45 caracteres' })
  @Column({
    type: 'varchar',
    nullable: false,
    length: 45,
    name: 'last_name'
  })
  lastName: string;


  @IsEmail({ require_tld: true }, { message: 'Email inválido' })
  @IsNotEmpty({ message: 'Email obrigatório' })
  @MaxLength(100, { message: 'Máximo de 100 caracteres' })
  @Column({
    type: 'varchar',
    nullable: false,
    // unique: true,
    length: 100,
    name: 'email'
  })
  email: string;

  @IsMobilePhone('pt-BR', {
    message: 'número inválido'
  })
  @IsNotEmpty({ message: 'Celular obrigatório' })
  @MaxLength(15, { message: 'Máximo de 15 caracteres' })
  @Column({
    type: 'varchar',
    nullable: true,
    length: 15,
    name: 'mobile_phone'
  })
  mobilePhone: string;


  @MaxLength(15, { message: 'Máximo de 15 caracteres' })
  @Column({
    type: 'varchar',
    nullable: true,
    length: 15,
    name: 'home_phone'
  })
  homePhone: string;


  @IsDateString({ message: 'Data inválida' })
  @Column({
    type: 'datetime',
    nullable: true,
    name: 'birth_date'
  })
  birthDate: Date;


  @IsDateString({ message: 'Data inválida' })
  @Column({
    type: 'datetime',
    nullable: false,
    name: 'hire_date'
  })
  hireDate: Date;

  @Column({
    type: 'text',
    nullable: true,
    name: 'additional_notes'
  })
  additionalNotes: string;

  @Column({
    type: 'enum',
    nullable: true,
    default: 'Active',
    enum: ['Active', 'Inactive', 'Prospective'],
    name: 'status'
  })
  status: string;


  @Column({
    type: 'enum',
    nullable: true,
    default: 'ServiceListWage',
    enum: ['ServiceListWage', 'EmployeeWage'],
    name: 'wage_type'
  })
  wageType: string;


  @Column({
    type: 'decimal',
    nullable: true,
    precision: 22,
    name: 'employee_wage'
  })
  employeeWage: number;

  // @ManyToOne(type => WageTier, wageTier => wageTier.employees, { nullable: true })
  // @JoinColumn()
  // @Type((wt) => WageTier)
  // wageTierId: WageTier;
  // @ManyToOne(type => WageTier)
  // @JoinColumn({ name: 'wage_tier_id', referencedColumnName: 'id' })
  // wageTier: WageTier;
  @ManyToOne(() => WageTier, (wage_tier: WageTier) => wage_tier.employees, { nullable: true, onDelete: 'NO ACTION', onUpdate: 'NO ACTION' })
  @JoinColumn()
  wageTier: WageTier | null;

}
