import { Test, TestingModule } from '@nestjs/testing';
import { IncludeService } from './include.service';

describe('IncludeService', () => {
  let service: IncludeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [IncludeService],
    }).compile();

    service = module.get<IncludeService>(IncludeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
