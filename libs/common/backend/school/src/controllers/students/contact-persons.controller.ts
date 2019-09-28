import { Controller } from '@nestjs/common';
import { ContactPerson } from '@suite/entities';
import { CrudController, Crud } from '@nestjsx/crud';
import { ContactPersonsService } from '../../services/contact-persons.service';

@Crud({
  model: {
    type: ContactPerson
  }
})

@Controller('school/contact-persons')
export class ContactPersonsController implements CrudController<ContactPerson> {
  constructor(
    public service: ContactPersonsService
  ) { }
}

