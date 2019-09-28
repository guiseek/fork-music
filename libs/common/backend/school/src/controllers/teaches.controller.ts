import { Controller } from '@nestjs/common';
import { Teach } from '@suite/entities';
import { TeachesService } from '../services/teaches.service';
import { CrudController, Crud } from '@nestjsx/crud';

@Crud({
  model: {
    type: Teach
  }
})
@Controller('school/teaches')
export class TeachesController implements CrudController<Teach> {
  constructor(
    public service: TeachesService
  ) { }
}
