import { Test, TestingModule } from '@nestjs/testing';
import { IncludeController } from './include.controller';

describe('Include Controller', () => {
  let controller: IncludeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [IncludeController],
    }).compile();

    controller = module.get<IncludeController>(IncludeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
