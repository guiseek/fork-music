import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AccountModule, InUserAccountService } from 'backend/account';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './strategies/local.strategy';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants/jwt.config';
import { JwtStrategy } from './strategies/jwt.strategy';
import { AuthController } from './auth.controller';
@Module({
  imports: [
    AccountModule,
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '3600s' }
    })
  ],
  providers: [AuthService, LocalStrategy, JwtStrategy],
  exports: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}
