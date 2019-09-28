import { Controller } from '@nestjs/common';
import { CrudController, Crud, Override, ParsedRequest, CrudRequest, ParsedBody } from '@nestjsx/crud';
import { ClassroomType } from '@suite/entities';
import { ClassroomTypesService } from '../../services/classroom-types.service';
import { ClassroomTypeDto } from 'backend/school/dto';

@Crud({
  model: {
    type: ClassroomType
  }
})
@Controller('school/classroom-types')
export class ClassroomTypesController implements CrudController<ClassroomType> {
  constructor(
    public service: ClassroomTypesService
  ) { }
  get base(): CrudController<ClassroomTypeDto> {
    return this;
  }

  @Override()
  createOne(
    @ParsedRequest() req: CrudRequest,
    @ParsedBody() dto: ClassroomTypeDto,
  ) {
    return this.base.createOneBase(req, dto);
  }
}
