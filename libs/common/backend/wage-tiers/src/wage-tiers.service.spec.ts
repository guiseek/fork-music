import { Test, TestingModule } from '@nestjs/testing';
import { WageTiersService } from './wage-tiers.service';

describe('WageTiersService', () => {
  let service: WageTiersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WageTiersService],
    }).compile();

    service = module.get<WageTiersService>(WageTiersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
