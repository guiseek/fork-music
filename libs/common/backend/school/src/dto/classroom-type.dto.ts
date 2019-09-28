import { ApiModelProperty } from '@nestjs/swagger';
import { IsNotEmpty, MaxLength } from 'class-validator';

export class ClassroomTypeDto {
  @ApiModelProperty({ type: Number })
  id: number;

  @IsNotEmpty({ message: 'Tipo de classe obrigatório' })
  @MaxLength(128, { message: 'Máximo de 128 caracteres' })
  @ApiModelProperty()
  name: string;

  @IsNotEmpty({ message: 'Descrição de classe obrigatório' })
  @MaxLength(512, { message: 'Máximo de 512 caracteres' })
  @ApiModelProperty()
  description: string;
}