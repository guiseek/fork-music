import { Controller } from '@nestjs/common';
import { CrudController, Crud } from '@nestjsx/crud';
import { OptionIncludedService } from '../services/option-included.service';

import { OptionIncluded } from '@suite/entities';

@Crud({
  model: {
    type: OptionIncluded
  }
})
@Controller('account/option-included')
export class OptionIncludedController implements CrudController<OptionIncluded> {
  constructor(
    public service: OptionIncludedService
  ) { }
}
