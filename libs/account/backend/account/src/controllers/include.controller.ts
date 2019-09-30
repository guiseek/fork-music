import { Controller } from '@nestjs/common';
import { CrudController, Crud } from '@nestjsx/crud';
import { IncludeService } from '../services/include.service';
import { Include } from '@suite/entities';

@Crud({
  model: {
    type: Include
  }
})
@Controller('account/include')
export class IncludeController implements CrudController<Include> {
  constructor(
    public service: IncludeService
  ) { }
}
