import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { InUserAccountService } from 'backend/account';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(
    private readonly inUserAccountService: InUserAccountService
  ) {
    super();
  }
  async validate(email: string, password: string): Promise<any> {
    console.log(email, password)
    const userAccount = await this.inUserAccountService.validateUserAccount(
      email, password
    )
    if (!userAccount) {
      throw new UnauthorizedException();
    }
    return userAccount;
  }
}