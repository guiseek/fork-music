import { Controller, Get, Post, HttpCode, Body, HttpStatus, UseGuards, Param } from '@nestjs/common';
import { UserSignupDto } from '../dto';
import { map } from 'rxjs/operators';
import { User } from '@suite/entities';
import { UserService } from '../services/user.service';
import { AuthGuard } from '@nestjs/passport';
import { FetchRequestedUserGuard } from '../guards';
import { LoggedInUser, RequestedUser } from 'common/backend/typeorm';
// import { UsersService } from '../users.service';
// import { UserService } from '../services/user.service';

@Controller('users')
export class UserController {
  constructor(
    private readonly userService: UserService
  ) { }

  @Get()
  findAll() {
    return this.userService.findAll()
  }
  @Post()
  @HttpCode(HttpStatus.CREATED)
  public create(@Body() createUserDto: UserSignupDto) {
    const user$ = this.userService.createUser(createUserDto);
    return user$.pipe(map((user: User) => user));
  }

  @Get(':userId')
  @UseGuards(AuthGuard(), FetchRequestedUserGuard)
  @HttpCode(HttpStatus.FOUND)
  public findOne(
    @LoggedInUser() loggedInUser: User,
    @RequestedUser() user: User,
    @Param('id') id: number,
    // @Res() res: Response
  ) {
    console.log(loggedInUser)
    return user
    // return res.send(user);
  }
}
