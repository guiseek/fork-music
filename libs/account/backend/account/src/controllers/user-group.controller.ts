import { Controller } from '@nestjs/common';
import { CrudController, Crud } from '@nestjsx/crud';
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
}
