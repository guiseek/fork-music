import { Controller } from '@nestjs/common';
import { CrudController, Crud } from '@nestjsx/crud';
import { SubscriptionService } from '../services/subscription.service';

import { Subscription } from '@suite/entities';

@Crud({
  model: {
    type: Subscription
  }
})
@Controller('account/subscription')
export class SubscriptionController implements CrudController<Subscription> {
  constructor(
    public service: SubscriptionService
  ) { }
}
