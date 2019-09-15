import { IsNotEmpty, IsEmail } from 'class-validator/decorator/decorators';
import { ApiModelProperty } from '@nestjs/swagger';

export class UserSignupDto {
  @ApiModelProperty()
  @IsNotEmpty()
  readonly username: string;

  @ApiModelProperty()
  @IsNotEmpty({ message: 'Email obrigatório' })
  @IsEmail({ require_tld: true }, { message: 'Email inválido' })
  readonly email: string;

  @ApiModelProperty()
  @IsNotEmpty()
  readonly password: string;
}