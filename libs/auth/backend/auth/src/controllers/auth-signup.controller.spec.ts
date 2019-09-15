import { Test, TestingModule } from '@nestjs/testing';
import { AuthSignupController } from './auth-signup.controller';

describe('AuthSignup Controller', () => {
  let controller: AuthSignupController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthSignupController],
    }).compile();

    controller = module.get<AuthSignupController>(AuthSignupController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
