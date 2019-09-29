import { Controller } from '@nestjs/common';
import { CrudController, Crud } from '@nestjsx/crud';
import { SoftwareService } from '../services/software.service';

import { Software } from '@suite/entities';

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
}
