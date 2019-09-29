import { Controller } from '@nestjs/common';
import { CrudController, Crud } from '@nestjsx/crud';
import { PrerequisiteService } from '../services/prerequisite.service';

import { Prerequisite } from '@suite/entities';

@Crud({
  model: {
    type: Prerequisite
  }
})
@Controller('prerequisite')
export class PrerequisiteController implements CrudController<Prerequisite> {
  constructor(
    public service: PrerequisiteService
  ) { }
}
