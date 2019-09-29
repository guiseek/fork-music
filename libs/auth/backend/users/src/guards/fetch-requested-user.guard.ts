import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';
import { User } from '@suite/entities';
import { map, switchMap } from 'rxjs/operators';

@Injectable()
export class FetchRequestedUserGuard implements CanActivate {
  constructor(private readonly userService: UserService) { }

  canActivate(context: ExecutionContext): Promise<boolean> | Observable<boolean> {
    console.log('loggedInUser: ', context)
    const request = context.switchToHttp().getRequest();
    const userId: number = Number(request.params.userId);
    const loggedInUser: User = request.user as User;
    return this.userService.findUserById(userId).pipe(
      map((user: User) => ((request as any).requestedUser = user)),
      switchMap((user: User) => this.userService.canAccessUser(user, loggedInUser))
    );
  }
}

//   canActivate(
//     context: ExecutionContext,
//   ): boolean | Promise<boolean> | Observable<boolean> {
//     return true;
//   }
// }
