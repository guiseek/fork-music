import { Test, TestingModule } from '@nestjs/testing';
import { ClassroomSchedulesController } from './classroom-schedules.controller';

describe('ClassroomSchedules Controller', () => {
  let controller: ClassroomSchedulesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ClassroomSchedulesController],
    }).compile();

    controller = module.get<ClassroomSchedulesController>(ClassroomSchedulesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
