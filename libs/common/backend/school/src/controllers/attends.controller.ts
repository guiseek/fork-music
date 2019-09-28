import { Controller } from '@nestjs/common';
import { Attend } from '@suite/entities';
import { CrudController, Crud } from '@nestjsx/crud';
import { AttendsService } from '../services/attends.service';

@Crud({
  model: {
    type: Attend
  }
})
@Controller('school/attends')
export class AttendsController implements CrudController<Attend> {
  constructor(
    public service: AttendsService
  ) { }
}
