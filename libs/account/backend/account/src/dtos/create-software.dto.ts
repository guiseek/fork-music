import { IsNotEmpty, IsOptional, IsUrl } from 'class-validator/decorator/decorators';

export class CreateSoftwareDto {
  @IsNotEmpty({ message: 'Código obrigatório' })
  softwareName: string;

  // @IsOptional()
  @IsUrl({ require_valid_protocol: true }, { message: 'URL inválida' })
  @IsNotEmpty({ message: 'Link do software obrigatório' })
  accessLink?: string;
}
