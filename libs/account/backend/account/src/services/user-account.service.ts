import { Injectable, ConflictException } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserAccount } from '@suite/entities';
import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class UserAccountService extends TypeOrmCrudService<UserAccount> {
  constructor(
    @InjectRepository(UserAccount) repo: Repository<UserAccount>
  ) {
    super(repo)
  }

  verifyEmail(email: string): Observable<UserAccount> {
    const userCount$: Observable<number> = from(
      this.repo.count({
        where: { email },
        // ...options,
        // force: true
      })
    );

    return userCount$.pipe(
      map((count: number) => {
        if (count) {
          throw new ConflictException('Este email já está sendo usado.');
        }
        return null
      }),
      // switchMap((user: User) => from(this.userRepository.save(user, options))),
      // switchMap((user: User) => this.userRepository.findOneOrFail(user.id, options))
    );
  }
}

