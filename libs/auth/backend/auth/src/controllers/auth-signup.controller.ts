import { Controller, Post, Body, HttpCode, HttpStatus } from '@nestjs/common';
import { AuthService } from '../auth.service';
import { UserSignupDto } from 'auth/backend/users';
// import { EmailInUse } from 'common/backend/typeorm';

@Controller('auth')
export class AuthSignupController {
  constructor(
    private readonly authService: AuthService
  ) { }

  // @UseGuards(AuthGuard('local'))
  @Post('signup')
  @HttpCode(HttpStatus.CREATED)
  async signup(@Body() user: UserSignupDto) {
    try {
      return await this.authService.signup(user)
    } catch (err) {
      return err
    }
    
  }
  // @HttpResponse(HttpStatus.OK)
  @Post('check')
  async check(@Body() user: Partial<UserSignupDto>) {
    console.log(user)
    return this.authService.checkEmail(user.email)
  }
}
