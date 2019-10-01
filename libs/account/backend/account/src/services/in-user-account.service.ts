import { Injectable, BadRequestException } from '@nestjs/common';
import { UserAccountService } from './user-account.service';
import { UserAccount } from '@suite/entities';
import { FindOneOptions } from 'typeorm';

@Injectable()
export class InUserAccountService {
  constructor(
    private readonly userAccountService: UserAccountService,
    // private readonly jwtService: JwtService
  ) {}
  async validateUserAccount(email: string, pass: string) {
    console.log('validate ', email, pass)
    const userAccount = await this.userAccountService.findOne({ email })
    if (!userAccount) {
      throw new BadRequestException('Credenciais inválidas')
    }
    if (userAccount.validatePassword(pass)) {
      console.log('userAccountPassword: ', userAccount.password)
      console.log('userAccountValidatePassword: ', userAccount.validatePassword(pass))
      const { password, ...result } = userAccount;
      return result;
    }
    return null;
  }
  // async login(user: any) {
  //   const payload = { email: user.email, sub: user.id }
  //   return {
  //     access_token: this.jwtService.sign(payload)
  //   }
  // }
  async verifyEmail(email: string): Promise<UserAccount> | null {
    return await this.userAccountService.verifyEmail(email).toPromise()
    // return await this.userAccountService.findOne({
    //   email
    // }, {
    //   select: ['email', 'password']
    // })
  }
  async findOne(options: FindOneOptions) {
    return await this.userAccountService.findOne(options)
  }
  async findByEmailWithPassword(email: string): Promise<UserAccount> | null {
    return await this.userAccountService.findOne({
      email
    }, {
      select: ['email', 'password']
    })
  }
}
