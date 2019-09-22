import { Injectable } from '@nestjs/common';
import { UserService, UserSigninDto, UserSignupDto } from 'auth/backend/users';
import { JwtService } from '@nestjs/jwt';
import { Observable, from, of } from 'rxjs';
import { User } from '@suite/entities';
import { map, switchAll, switchMap } from 'rxjs/operators';
import { AuthToken, AuthJwtPayload } from '@suite/interfaces';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService
  ) { }
  public validateUser(email: string, pass: string): Observable<User | null> {
    const user$: Observable<User> = from(
      this.userService.findOneUser({
        where: { email },
        select: ['id', 'password', 'salt']
      })
    );

    return user$.pipe(
      map((user: User) => {
        return from(this.userService.hashPassword(pass, user.salt)).pipe(
          map(v => ({ passwordHash: v.hash, user }))
        );
      }),
      switchAll(),
      switchMap(({ passwordHash, user }: { passwordHash: string; user: User }) => {
        if (user && user.password === passwordHash) {
          return from(this.userService.findUserById(user.id));
        }
        return of(null);
      })
    );
  }

  public login(user: User): Observable<AuthToken> {
    const payload = { email: user.email, sub: user.id };
    return of({
      id: user.id,
      email: user.email,
      active: user.active,
      roles: user.roles,
      access_token: this.jwtService.sign(payload)
    });
  }
  // async validateUser({ email, password }: UserSigninDto) {
  //   const user = await this.userService.findByEmail(email)

  // }
  // async validateUser(username: string, pass: string): Promise<any> {
  //   const user = await this.usersService.findOne(username);
  //   if (user && user.password === pass) {
  //     const { password, ...result } = user;
  //     return result;
  //   }
  //   return null;
  // }
  // async signin(user: UserSigninDto) {
  //   try {
  //     const options = {
  //       email: user.email
  //     }
  //     const signed = await this.userService.findOneUser()
  //     const payload = { username: signed.username, sub: signed.id };
  //     return {
  //       access_token: this.jwtService.sign(payload),
  //     };
  //   } catch(err) {
  //     return 
  //   }
  // }
  async signup(user: UserSignupDto) {
    console.log(user)
    return this.userService.createUser(user)
    // const payload = { username: user.username, sub: user.userId };
    // return {
    //   access_token: this.jwtService.sign(payload),
    // };
  }
}
