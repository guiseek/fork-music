import { IsNotEmpty, IsEmail } from 'class-validator/decorator/decorators';

export class UserSignupDto {
  @IsNotEmpty()
  readonly username: string;

  @IsNotEmpty({ message: 'Email obrigatório' })
  @IsEmail({ require_tld: true }, { message: 'Email inválido' })
  readonly email: string;

  @IsNotEmpty()
  readonly password: string;
}