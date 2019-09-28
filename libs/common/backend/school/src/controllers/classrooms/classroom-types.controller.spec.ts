import { Test, TestingModule } from '@nestjs/testing';
import { ClassroomTypesController } from './classroom-types.controller';

describe('ClassroomTypes Controller', () => {
  let controller: ClassroomTypesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ClassroomTypesController],
    }).compile();

    controller = module.get<ClassroomTypesController>(ClassroomTypesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
