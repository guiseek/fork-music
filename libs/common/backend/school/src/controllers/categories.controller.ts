import { Controller } from '@nestjs/common';
import { CrudController, Crud } from '@nestjsx/crud';
import { Category } from '@suite/entities';
import { CategoriesService } from '../services/categories.service';

@Crud({
  model: {
    type: Category
  }
})
@Controller('school/categories')
export class CategoriesController implements CrudController<Category> {
  constructor(
    public service: CategoriesService
  ) { }
}
