import { Test, TestingModule } from '@nestjs/testing';
import { OptionIncludedController } from './option-included.controller';

describe('OptionIncluded Controller', () => {
  let controller: OptionIncludedController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OptionIncludedController],
    }).compile();

    controller = module.get<OptionIncludedController>(OptionIncludedController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
