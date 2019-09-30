import { Controller } from '@nestjs/common';
import { CrudController, Crud } from '@nestjsx/crud';
import { InGroup } from '@suite/entities';
import { InGroupService } from '../services/in-group.service';

@Crud({
  model: {
    type: InGroup
  }
})
@Controller('account/in-group')
export class InGroupController implements CrudController<InGroup> {
  constructor(
    public service: InGroupService
  ) { }
}
