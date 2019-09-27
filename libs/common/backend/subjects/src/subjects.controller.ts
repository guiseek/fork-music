import { Controller } from '@nestjs/common';
import { CrudController, Crud } from '@nestjsx/crud';
import { Subject } from '@suite/entities';
import { SubjectsService } from './subjects.service';

@Crud({
  model: {
    type: Subject
  }
})
@Controller('subjects')
export class SubjectsController implements CrudController<Subject> {
  constructor(
    public service: SubjectsService
  ) { }
}
