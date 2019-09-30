import { IsNotEmpty } from 'class-validator/decorator/decorators';

export class ConfirmationUserAccountDto {
  @IsNotEmpty({ message: 'Código obrigatório' })
  confirmationCode: string;
}
