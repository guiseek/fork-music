import { Test, TestingModule } from '@nestjs/testing';
import { InUserAccountService } from './in-user-account.service';

describe('InUserAccountService', () => {
  let service: InUserAccountService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InUserAccountService],
    }).compile();

    service = module.get<InUserAccountService>(InUserAccountService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
