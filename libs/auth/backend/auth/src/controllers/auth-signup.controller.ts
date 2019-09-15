import { Controller, UseGuards, Post, Request } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller('api/auth')
export class AuthSignupController {
  @UseGuards(AuthGuard('local'))
  @Post('signup')
  async signup(@Request() req) {
    return req.user;
  }
}
