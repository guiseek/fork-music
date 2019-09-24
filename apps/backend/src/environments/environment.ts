import { USER_ENTITIES } from 'auth/backend/users';
import { ENTITIES } from '@suite/entities';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const database: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'root',
  database: 'ticket-system',
  entities: [...USER_ENTITIES, ...ENTITIES],
  synchronize: false
}
export const environment = {
  production: false
};
