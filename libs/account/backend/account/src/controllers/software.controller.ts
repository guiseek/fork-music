import { Controller } from '@nestjs/common';
import { CrudController, Crud, Override, ParsedRequest, CrudRequest, ParsedBody } from '@nestjsx/crud';
import { SoftwareService } from '../services/software.service';

import { Software } from '@suite/entities';
import { CreateSoftwareDto } from '../dtos';

@Crud({
  model: {
    type: Software
  }
})
@Controller('account/software')
export class SoftwareController implements CrudController<Software> {
  constructor(
    public service: SoftwareService
  ) { }
  get base(): CrudController<CreateSoftwareDto> {
    return this
  }
  @Override()
  createOne(
    @ParsedRequest() req: CrudRequest,
    @ParsedBody() dto: CreateSoftwareDto,
  ) {
    return this.base.createOneBase(req, dto)
  }
}
