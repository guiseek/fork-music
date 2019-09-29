import { Test, TestingModule } from '@nestjs/testing';
import { UserGroupTypeService } from './user-group-type.service';

describe('UserGroupTypeService', () => {
  let service: UserGroupTypeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserGroupTypeService],
    }).compile();

    service = module.get<UserGroupTypeService>(UserGroupTypeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
