import { IsNotEmpty, IsEmail } from 'class-validator';

export class InUserAccountDto {
  @IsNotEmpty({ message: 'Email obrigatório' })
  @IsEmail({ require_tld: false }, { message: 'Email inválido' })
  email: string;

  @IsNotEmpty({ message: 'Senha obrigatória' })
  password: string;
}