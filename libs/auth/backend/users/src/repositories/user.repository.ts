import { EntityRepository } from 'typeorm';
import { Observable, of } from 'rxjs';
import { User } from '@suite/entities';
import {
  TransactionalSoftDeletableRepository
} from 'common/backend/typeorm';
import { UserRole } from '../enums';

@EntityRepository(User)
export class UserRepository extends TransactionalSoftDeletableRepository<User> {
  public canAccess(user: User, loggedInUser: User): Observable<boolean> {
    let proceed = true;
    if (loggedInUser.roles.includes(UserRole.ADMIN)) {
      proceed = user.id === loggedInUser.id;
    }

    // if (loggedInUser.role !== UserRole.ADMIN) {
    //   proceed = user.id === loggedInUser.id;
    // }
    return of(proceed);
  }
}
