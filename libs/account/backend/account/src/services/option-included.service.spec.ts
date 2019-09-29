import { Test, TestingModule } from '@nestjs/testing';
import { OptionIncludedService } from './option-included.service';

describe('OptionIncludedService', () => {
  let service: OptionIncludedService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OptionIncludedService],
    }).compile();

    service = module.get<OptionIncludedService>(OptionIncludedService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
