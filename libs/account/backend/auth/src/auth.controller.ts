import { Controller, UseGuards, Post, Request, Body, Get, HttpCode, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';
import { LoginDto } from './dtos/login.dto';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService
  ) {}
  // @UseGuards(AuthGuard('local'))
  @Post('login')
  async login(@Body() credentials: LoginDto) {
    console.log('credentials: ', credentials)
    return this.authService.login(credentials)
  }
  @UseGuards(AuthGuard('jwt'))
  @Get('me')
  getAuth(@Request() req) {
    console.log(req.user)
    return req.user;
  }
  @Post('email')
  @HttpCode(HttpStatus.ACCEPTED)
  async email(@Body('email') email: string) {
    console.log(email)
    return await this.authService.email(email)
  }
  // @Post('register')
  // async register(@Body() userAccountDto: UserAccount) {
  //   console.log(userAccountDto)
  //   return await this.authService.register(userAccountDto)
  //   // return userAccountDto
  // }
}
