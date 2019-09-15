import { IsNotEmpty } from 'class-validator/decorator/decorators';

export class UserSigninDto {
  @IsNotEmpty()
  readonly email: string;

  @IsNotEmpty()
  readonly password: string;
}