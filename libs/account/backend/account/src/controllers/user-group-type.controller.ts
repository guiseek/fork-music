import { Controller } from '@nestjs/common';
import { CrudController, Crud } from '@nestjsx/crud';
import { UserGroupTypeService } from '../services/user-group-type.service';

import { UserGroupType } from '@suite/entities';

@Crud({
  model: {
    type: UserGroupType
  }
})
@Controller('account/user-group-type')
export class UserGroupTypeController implements CrudController<UserGroupType> {
  constructor(
    public service: UserGroupTypeService
  ) { }
}
