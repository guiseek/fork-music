import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersModule } from 'auth/backend/users';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './strategies/local.strategy';
import { AuthSigninController } from './controllers/auth-signin.controller';
import { AuthSignupController } from './controllers/auth-signup.controller';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './config/constants';
import { JwtStrategy } from './strategies/jwt.strategy';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '60s' }
    }),
    UsersModule
  ],
  providers: [AuthService, LocalStrategy, JwtStrategy],
  exports: [AuthService],
  controllers: [AuthSigninController, AuthSignupController],
})
export class AuthModule {}
