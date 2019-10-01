import { Controller, Post, UseGuards, Request } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { InUserAccountService } from '../services/in-user-account.service';

@Controller('account/in-user-account')
export class InUserAccountController {
  constructor(
    private readonly inUserAccountService: InUserAccountService
  ) { }
  // @Post()
  // @UseGuards(AuthGuard('jwt'))
  // public me(@Request() req) {
  //   console.log('credential: ', req.user)
  //   // return this.inUserAccountService.login(req.user)
  // }
  @Post()
  @UseGuards(AuthGuard('jwt'))
  public in(@Request() req) {
    console.log('credential: ', req.user)
    // return this.inUserAccountService.login(req.user)
  }
}
