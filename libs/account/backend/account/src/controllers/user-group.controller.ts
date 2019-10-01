import { Controller } from '@nestjs/common';
import { CrudController, Crud, Override, ParsedRequest, CrudRequest, ParsedBody } from '@nestjsx/crud';
import { UserGroupService } from '../services/user-group.service';

import { UserGroup } from '@suite/entities';

@Crud({
  model: {
    type: UserGroup
  }
})
@Controller('account/user-group')
export class UserGroupController implements CrudController<UserGroup> {
  constructor(
    public service: UserGroupService
  ) { }
  get base(): CrudController<UserGroup> {
    return this;
  }
  @Override()
  createOne(
    @ParsedRequest() req: CrudRequest,
    @ParsedBody() dto: UserGroup,
  ) {
    console.log(dto)
    dto.inGroups = []
    return this.base.createOneBase(req, dto);
  }
}
