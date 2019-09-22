import { Controller, UseGuards, Post, Request, Get, Body, HttpCode, HttpStatus, Res } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from '../auth.service';
import { UserSigninDto } from 'auth/backend/users';
import { LoggedInUser } from 'common/backend/typeorm';
import { Observable } from 'rxjs';
import { User } from '@suite/entities';
import { map } from 'rxjs/operators';

@Controller('auth')
export class AuthSigninController {
  constructor(
    private readonly authService: AuthService
  ) { }

  @Post('signin')
  @UseGuards(AuthGuard('local'))
  @HttpCode(HttpStatus.OK)
  public login(@LoggedInUser() credential: User): Observable<any> {
    console.log('user: ', credential)
    return this.authService.login(credential).pipe(
      map(({ access_token, ...payload }) => {
        // res.cookie(COOKIE.ACCESS_TOKEN, access_token);
        return { access_token, payload }
        // return res.send({ access_token });
      })
    );
  }

  // @UseGuards(AuthGuard('local'))
  // @Post('signin')
  // async signin(@Body() credentials: UserSigninDto) {
  //   console.log(credentials)
  //   const { email, password } = credentials
  //   return this.authService.validateUser(email, password);
  //   // return req.user;
  // }
  @UseGuards(AuthGuard('jwt'))
  @Get('me')
  getProfile(@Request() req) {
    return req.user;
  }
}
