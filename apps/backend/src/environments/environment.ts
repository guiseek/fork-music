// import { USER_ENTITIES } from 'auth/backend/users';
import { ENTITIES, SCHOOL_ENTITIES, ACCOUNT_ENTITIES } from '@suite/entities';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const database: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'root',
  database: 'forkmusic',
  // database: 'test',
  logging: false,
  entities: [...ENTITIES, ...ACCOUNT_ENTITIES, ...SCHOOL_ENTITIES],
  synchronize: false
}
export const environment = {
  production: false,
  api: {
    userAccount: '/api/account/user-account',
    groupType: '/api/account/group-type'
  }
};
