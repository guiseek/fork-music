import { Test, TestingModule } from '@nestjs/testing';
import { ClassroomTypesService } from './classroom-types.service';

describe('ClassroomTypesService', () => {
  let service: ClassroomTypesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ClassroomTypesService],
    }).compile();

    service = module.get<ClassroomTypesService>(ClassroomTypesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
