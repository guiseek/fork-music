import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InUserAccountService, UserAccountService } from 'backend/account';
import { JwtService } from '@nestjs/jwt';
import { LoginDto } from './dtos/login.dto';
import { EmailAlreadyExistsHandler } from 'common/backend/typeorm';
import { CreateUserAccountDto } from 'backend/account/dtos';
import { UserAccount } from '@suite/entities';

@Injectable()
export class AuthService {
  constructor(
    private readonly inUserAccountService: InUserAccountService,
    private readonly userAccountService: UserAccountService,
    private readonly jwtService: JwtService
  ) { }

  async validateUser(email: string, password: string): Promise<any> {
    return this.inUserAccountService.validateUserAccount(email, password)
  }

  async login(credentials: LoginDto) {
    const userAccount = await this.validateUser(
      credentials.email,
      credentials.password
    )
    if (!userAccount) {
      throw new UnauthorizedException()
    }
    const payload = { email: userAccount.email, sub: userAccount.id }
    return {
      access_token: this.jwtService.sign(payload)
    }
  }
  // @EmailAlreadyExistsHandler()
  async email(email: string) {
    console.log('email: ', email)
    return await this.inUserAccountService.verifyEmail(email);
  }

  async register(userAccount: UserAccount) {
    return await this.userAccountService.register(userAccount)
  }
}
