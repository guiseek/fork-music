import { ApiModelProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, MaxLength, IsEmail } from 'class-validator';

export class CreateUserAccountDto {
  @IsString({ always: true, message: 'Deve ser texto' })
  @IsNotEmpty({ message: 'Nome obrigatório' })
  @MaxLength(64, { message: 'Máximo de 64 caracteres' })
  @ApiModelProperty()
  firstName: string;

  @IsString({ always: true, message: 'Deve ser texto' })
  @IsNotEmpty({ message: 'Sobrenome brigatório' })
  @MaxLength(64, { message: 'Máximo de 64 caracteres' })
  @ApiModelProperty()
  lastName: string;

  // @IsString({ always: true, message: 'Deve ser texto' })
  // @IsNotEmpty({ message: 'Usuário brigatório' })
  // @MaxLength(64, { message: 'Máximo de 64 caracteres' })
  // @ApiModelProperty()
  // username: string;

  @IsNotEmpty({ message: 'Senha brigatória' })
  @ApiModelProperty()
  password: string;

  @IsEmail({ require_tld: true }, { message: 'Email inválido' })
  @IsNotEmpty({ message: 'Email obrigatório' })
  @MaxLength(128, { message: 'Máximo de 128 caracteres' })
  @ApiModelProperty()
  email: string;
}
