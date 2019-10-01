import { Test, TestingModule } from '@nestjs/testing';
import { InUserAccountController } from './in-user-account.controller';

describe('InUserAccount Controller', () => {
  let controller: InUserAccountController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InUserAccountController],
    }).compile();

    controller = module.get<InUserAccountController>(InUserAccountController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
