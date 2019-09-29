import { Controller } from '@nestjs/common';
import { CrudController, Crud } from '@nestjsx/crud';
import { OfferService } from '../services/offer.service';

import { Offer } from '@suite/entities';

@Crud({
  model: {
    type: Offer
  }
})
@Controller('account/offer')
export class OfferController implements CrudController<Offer> {
  constructor(
    public service: OfferService
  ) { }
}
