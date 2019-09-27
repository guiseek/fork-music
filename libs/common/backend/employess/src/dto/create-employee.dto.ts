import { ApiModelProperty } from '@nestjs/swagger';
import { EmployeeType, EmployeeStatus } from '@suite/interfaces';
import { IsEnum, IsNotEmpty, IsBoolean, IsString, MaxLength, IsEmail, MinLength, IsDateString } from 'class-validator';

export class CreateEmployeeDto {
  @ApiModelProperty({
    type: EmployeeType,
    nullable: true,
    default: EmployeeType.Teacher
  })
  @IsEnum(EmployeeType, {
    message: 'Inválido'
  })
  @IsNotEmpty({ message: 'Função obrigatório' })
  employeeType: string;

  @IsNotEmpty({ message: 'Incluir como professor é obrigatório' })
  @IsBoolean({ message: 'É professor?' })
  includeAsTeacher: boolean;

  @IsString({ always: true, message: 'Deve ser texto' })
  @IsNotEmpty({ message: 'Nome obrigatório' })
  @MaxLength(45, { message: 'Máximo de 45 caracteres' })
  firstName: string;

  @IsString({ always: true, message: 'Deve ser texto' })
  @IsNotEmpty({ message: 'Sobrenome brigatório' })
  @MaxLength(45, { message: 'Máximo de 45 caracteres' })
  lastName: string;

  @IsEmail({ require_tld: true }, { message: 'Email inválido' })
  @IsNotEmpty({ message: 'Email obrigatório' })
  @MaxLength(100, { message: 'Máximo de 100 caracteres' })
  email: string;

  // @IsMobilePhone('pt-BR', {
  //   message: 'número inválido'
  // })
  @IsNotEmpty({ message: 'Celular obrigatório' })
  @MinLength(9, { message: 'Mínimo de 9 digitos' })
  @MaxLength(15, { message: 'Máximo de 15 digitos' })
  mobilePhone: string;

  @IsNotEmpty({ message: 'Data de contratação obrigatória' })
  @IsDateString({ message: 'Data inválida' })
  hireDate: Date;

  // wageType: string;
  // employeeWage: number;
  // @ManyToOne(() => WageTier, (wage_tier: WageTier) => wage_tier.employees, { nullable: true, onDelete: 'NO ACTION', onUpdate: 'NO ACTION' })
  // @JoinColumn()
  // wageTier: WageTier | null;

}
