import * as crypto from 'crypto';
import { BadRequestException, Injectable, HttpStatus, ConflictException } from '@nestjs/common';
// import { CreateUserDto } from './dtos/createUser.dto';
// import { User } from './user.entity';
import { EntityManager } from 'typeorm';
// import { UserRepository } from './user.repository';
// import { CustomFindManyOptions, CustomFindOneOptions } from '../../common/typeorm/customTypes';
// import { EntityNotFoundExceptionHandler } from '../../common/decorators/exceptionHanlders/entityNotFound.exception-handler.decorator';
import { from, Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { UserRepository } from '../repositories';
import { UserSignupDto } from '../dto';
import { User } from '@suite/entities';
import { CustomFindManyOptions, CustomFindOneOptions, EntityNotFoundExceptionHandler, EmailAlreadyExistsHandler } from 'common/backend/typeorm';

@Injectable()
export class UserService {
  constructor(
    private readonly userRepository: UserRepository
  ) { }

  public async hashPassword(
    originalPassword: string,
    defaultSalt?: string | undefined
  ): Promise<{ hash: string; salt: string }> {
    const len = 128;
    const iterations = 30547;

    const generateSalt = (): Promise<string> => {
      return new Promise((resolve, reject) => {
        crypto.randomBytes(len, (saltError, saltValue) => {
          if (saltError) {
            return reject(saltError);
          }

          return resolve(saltValue.toString('base64'));
        });
      });
    };

    return await new Promise(async (resolve, reject) => {
      const saltStr = defaultSalt || (await generateSalt());
      crypto.pbkdf2(originalPassword, saltStr, iterations, len, 'sha1', (hashError, hashPassword) => {
        if (hashError) {
          return reject(hashError);
        }

        return resolve({
          salt: saltStr,
          hash: hashPassword.toString('base64')
        });
      });
    });
  }

  public createUser(
    createUserDto: UserSignupDto,
    options: { transactionalEntityManager?: EntityManager } = {}
  ): Observable<User> {
    const userCount$: Observable<number> = from(
      this.userRepository.count({
        where: { email: createUserDto.email },
        ...options,
        force: true
      })
    );

    return userCount$.pipe(
      map((count: number) => {
        if (count) {
          throw new BadRequestException('Este email já está sendo usado.');
        }
        return this.userRepository.create(createUserDto);
      }),
      switchMap((user: User) => from(this.userRepository.save(user, options))),
      switchMap((user: User) => this.userRepository.findOneOrFail(user.id, options))
    );
  }

  @EntityNotFoundExceptionHandler()
  public findOneUser(options: CustomFindOneOptions<User> = {}): Observable<User> {
    return from(this.userRepository.findOneOrFail(options)).pipe(map((user: User) => user));
  }

  @EntityNotFoundExceptionHandler()
  public findUserById(id: number, options: CustomFindOneOptions<User> = {}): Observable<User> {
    return from(this.userRepository.findOneOrFail(id, options)).pipe(map((user: User) => user));
  }

  public findUserByIds(ids: number[], options: CustomFindManyOptions<User> = {}): Observable<User[]> {
    return from(this.userRepository.findByIds(ids, options)).pipe(map((users: User[]) => users));
  }

  public canAccessUser(user: User, loggedInUser: User): Observable<boolean> {
    return this.userRepository.canAccess(user, loggedInUser).pipe(map((canAccess: boolean) => canAccess));
  }
  findAll() {
    return this.userRepository.find()
  }
  // @EmailAlreadyExistsHandler()
  verifyEmail(email: string): Observable<User> {
    const userCount$: Observable<number> = from(
      this.userRepository.count({
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
  //  {
  //   return this.userRepository.findOne({ email }, {
  //     select: ['active', 'createdAt', 'emailValidatedAt']
  //   })
  // }
  async checkEmail(email: string): Promise<HttpStatus | ConflictException> {
    const user = await this.userRepository.findOne({
      where: { email }
    })
    if (user) {
      throw new ConflictException()
    } else {
      return HttpStatus.ACCEPTED
    }
    // return this.userRepository.count({
    //   where: { email }
    // })
  }
}
