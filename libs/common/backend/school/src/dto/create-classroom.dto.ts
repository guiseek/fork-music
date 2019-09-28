import { ApiModelProperty } from '@nestjs/swagger';
import { IsDateString, IsOptional, IsDate } from 'class-validator';
import { ClassroomTypeDto } from './classroom-type.dto';
import { Type } from 'class-transformer';
import { CrudValidationGroups } from '@nestjsx/crud';

const { CREATE, UPDATE } = CrudValidationGroups;

export class CreateClassroomDto {
  @ApiModelProperty({ type: Number })
  id: number;

  @Type(() => ClassroomTypeDto)
  @ApiModelProperty({ type: ClassroomTypeDto })
  classroomType: ClassroomTypeDto | null;

  @ApiModelProperty()
  name: string;

  @ApiModelProperty()
  description: string;

  @IsDateString({ message: 'Data não é válida' })
  // @IsOptional({ groups: [UPDATE] })
  // @IsDate({ message: 'Não é uma data' })
  // @Type(() => Date)
  startDate: Date;

  @IsOptional({ groups: [CREATE, UPDATE] })
  @IsDateString({ message: 'Data inválida' })
  endDate: Date | null;
}
