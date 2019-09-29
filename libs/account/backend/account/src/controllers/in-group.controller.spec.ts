import { Test, TestingModule } from '@nestjs/testing';
import { InGroupController } from './in-group.controller';

describe('InGroup Controller', () => {
  let controller: InGroupController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InGroupController],
    }).compile();

    controller = module.get<InGroupController>(InGroupController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
