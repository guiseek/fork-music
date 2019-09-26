import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { WageTier } from '@suite/entities';
import { WageTiersService } from './wage-tiers.service';

@Crud({
  model: {
    type: WageTier
  }
})
@Controller('wage-tiers')
export class WageTiersController implements CrudController<WageTier> {
  constructor(
    public service: WageTiersService
  ) { }
}
