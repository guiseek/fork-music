import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity';
import { Repository } from 'typeorm';
import { UserSignupDto, UserSigninDto } from './dto';
import { User } from '@suite/entities';

// export type User = any;

@Injectable()
export class UsersService {
  private readonly users: UserEntity[];

  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>
    // @InjectRepository(UserEntity)
    // private readonly userRepository: Repository<UserEntity>
  ) {
    // this.users = [
    //   {
    //     userId: 1,
    //     username: 'john',
    //     password: 'changeme',
    //   },
    //   {
    //     userId: 2,
    //     username: 'chris',
    //     password: 'secret',
    //   },
    //   {
    //     userId: 3,
    //     username: 'maria',
    //     password: 'guess',
    //   },
    // ];
  }

  async findOne(username: string): Promise<UserEntity | undefined> {
    return this.users.find(user => user.username === username);
  }
  async findByEmailAndPassword({ email, password }: UserSigninDto): Promise<UserEntity | undefined> {
    // return this.users.find(user => user.username === username);
    return this.userRepository.findOneOrFail({
      email, password
    })
    // return this.userRepository.findOne({
    //   email, password
    // })
  }
  findAll(): Promise<UserEntity[]> {
    return this.userRepository.find();
  }
  async create(user: UserSignupDto): Promise<UserEntity> {
    return await this.userRepository.save(user)
  }

}