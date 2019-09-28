import { Test, TestingModule } from '@nestjs/testing';
import { ClassroomSchedulesService } from './classroom-schedules.service';

describe('ClassroomSchedulesService', () => {
  let service: ClassroomSchedulesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ClassroomSchedulesService],
    }).compile();

    service = module.get<ClassroomSchedulesService>(ClassroomSchedulesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
