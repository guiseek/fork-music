import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from '../auth.service';
import { catchError, map } from 'rxjs/operators';
import { of } from 'rxjs';
import { User } from '@suite/entities';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super({
      usernameField: 'email'
    });
  }

  public async validate(email: string, password: string): Promise<User> {
    return await this.authService
      .validateUser(email, password)
      .pipe(
        catchError(() => of(null)),
        map((user: User | null) => {
          if (!user) {
            throw new UnauthorizedException();
          }
          return user;
        })
      )
      .toPromise();
  }
}

// export class LocalStrategy extends PassportStrategy(Strategy) {
//   constructor(private readonly authService: AuthService) {
//     super();
//   }

//   async validate(username: string, password: string): Promise<any> {
//     const user = await this.authService.validateUser(username, password);
//     if (!user) {
//       throw new UnauthorizedException();
//     }
//     return user;
//   }
// }