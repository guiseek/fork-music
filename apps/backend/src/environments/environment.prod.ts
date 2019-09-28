import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { USER_ENTITIES } from 'auth/backend/users';
import { ENTITIES, SCHOOL_ENTITIES } from '@suite/entities';

export const database: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'root',
  // database: 'ticket-system',
  database: 'db-system',
  entities: [...USER_ENTITIES, ...ENTITIES, ...SCHOOL_ENTITIES],
  synchronize: true
}

export const environment = {
  production: true
};
