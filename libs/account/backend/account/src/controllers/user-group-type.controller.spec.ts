import { Test, TestingModule } from '@nestjs/testing';
import { UserGroupTypeController } from './user-group-type.controller';

describe('UserGroupType Controller', () => {
  let controller: UserGroupTypeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserGroupTypeController],
    }).compile();

    controller = module.get<UserGroupTypeController>(UserGroupTypeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
