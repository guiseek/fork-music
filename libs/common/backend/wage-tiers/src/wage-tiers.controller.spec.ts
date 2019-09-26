import { Test, TestingModule } from '@nestjs/testing';
import { WageTiersController } from './wage-tiers.controller';

describe('WageTiers Controller', () => {
  let controller: WageTiersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WageTiersController],
    }).compile();

    controller = module.get<WageTiersController>(WageTiersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
