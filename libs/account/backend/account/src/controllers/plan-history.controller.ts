import { Controller } from '@nestjs/common';
import { CrudController, Crud } from '@nestjsx/crud';
import { PlanHistoryService } from '../services/plan-history.service';

import { PlanHistory } from '@suite/entities';

@Crud({
  model: {
    type: PlanHistory
  }
})
@Controller('account/plan-history')
export class PlanHistoryController implements CrudController<PlanHistory> {
  constructor(
    public service: PlanHistoryService
  ) { }
}
