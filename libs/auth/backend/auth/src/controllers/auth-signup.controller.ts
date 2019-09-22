import { Controller, UseGuards, Post, Request, Body } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from '../auth.service';
import { UserSignupDto } from 'auth/backend/users';

@Controller('auth')
export class AuthSignupController {
  constructor(
    private readonly authService: AuthService
  ) { }

  // @UseGuards(AuthGuard('local'))
  @Post('signup')
  async signup(@Body() user: UserSignupDto) {
    // this.authService.signup(user)
  }
}
