import { Test, TestingModule } from '@nestjs/testing';
import { TeachesController } from './teaches.controller';

describe('Teaches Controller', () => {
  let controller: TeachesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TeachesController],
    }).compile();

    controller = module.get<TeachesController>(TeachesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
