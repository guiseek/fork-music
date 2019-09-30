import { Test, TestingModule } from '@nestjs/testing';
import { InGroupService } from './in-group.service';

describe('InGroupService', () => {
  let service: InGroupService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InGroupService],
    }).compile();

    service = module.get<InGroupService>(InGroupService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
