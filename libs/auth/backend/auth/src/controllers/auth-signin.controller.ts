import { Controller, UseGuards, Post, Request, Get } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from '../auth.service';

@Controller('auth')
export class AuthSigninController {
  constructor(
    private readonly authService: AuthService
  ) { }

  @UseGuards(AuthGuard('local'))
  @Post('signin')
  async signin(@Request() req) {
    return this.authService.signin(req.user);
    // return req.user;
  }
  @UseGuards(AuthGuard('jwt'))
  @Get('me')
  getProfile(@Request() req) {
    return req.user;
  }
}
