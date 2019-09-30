import { Test, TestingModule } from '@nestjs/testing';
import { PrerequisiteController } from './prerequisite.controller';

describe('Prerequisite Controller', () => {
  let controller: PrerequisiteController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PrerequisiteController],
    }).compile();

    controller = module.get<PrerequisiteController>(PrerequisiteController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
