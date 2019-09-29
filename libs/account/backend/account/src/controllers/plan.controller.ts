import { Controller } from '@nestjs/common';
import { CrudController, Crud } from '@nestjsx/crud';
import { PlanService } from '../services/plan.service';

import { Plan } from '@suite/entities';

@Crud({
  model: {
    type: Plan
  }
})
@Controller('account/plan-history')
export class PlanController implements CrudController<Plan> {
  constructor(
    public service: PlanService
  ) { }
}
