import { Controller } from '@nestjs/common';
import { CrudController, Crud } from '@nestjsx/crud';
import { OptionService } from '../services/option.service';

import { Option } from '@suite/entities';

@Crud({
  model: {
    type: Option
  }
})
@Controller('account/option-included')
export class OptionController implements CrudController<Option> {
  constructor(
    public service: OptionService
  ) { }
}
