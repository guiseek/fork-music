import { Test, TestingModule } from '@nestjs/testing';
import { AuthSigninController } from './auth-signin.controller';

describe('AuthSignin Controller', () => {
  let controller: AuthSigninController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthSigninController],
    }).compile();

    controller = module.get<AuthSigninController>(AuthSigninController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
