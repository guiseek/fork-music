import * as crypto from 'crypto';
import { Column, Entity, Index, OneToMany, PrimaryGeneratedColumn, BaseEntity, BeforeInsert } from 'typeorm';
import { InGroup } from './in-group.entity';


@Entity('user_account')
// @Index('user_account_ak_1', ['username'], { unique: true })
@Index('user_account_ak_2', ['email'], { unique: true })
export class UserAccount extends BaseEntity {

  @PrimaryGeneratedColumn({
    type: 'int',
    name: 'id'
  })
  id: number;


  @Column({
    type: 'varchar',
    nullable: false,
    length: 64,
    name: 'first_name'
  })
  firstName: string;


  @Column({
    type: 'varchar',
    nullable: false,
    length: 64,
    name: 'last_name'
  })
  lastName: string;


  // @Column({
  //   type: 'varchar',
  //   nullable: false,
  //   unique: true,
  //   length: 64,
  //   name: 'username'
  // })
  // username: string;


  @Column({
    type: 'varchar',
    nullable: false,
    name: 'password'
  })
  password: string;


  @Column({
    type: 'varchar',
    nullable: false,
    unique: true,
    length: 128,
    name: 'email'
  })
  email: string;


  @Column({
    type: 'text',
    nullable: false,
    name: 'confirmation_code'
  })
  confirmationCode: string;


  @Column({
    type: 'timestamp',
    nullable: true,
    name: 'confirmation_time'
  })
  confirmationTime: Date | null;


  @Column({
    type: 'timestamp',
    nullable: false,
    default: () => 'CURRENT_TIMESTAMP',
    name: 'insert_ts'
  })
  insertTs: Date;


  @OneToMany(() => InGroup, (inGroup: InGroup) => inGroup.userAccount, { onDelete: 'RESTRICT', onUpdate: 'RESTRICT' })
  inGroups: InGroup[];

  @BeforeInsert()
  createPassword() {
    if (this.password) {
      this.password = this.hashPassword(this.password);
    }
  }
  @BeforeInsert()
  confirmCode() {
    if (!this.confirmationCode) {
      this.confirmationCode = ("" + Math.random()).substring(2, 7);
    }
  }
  hashPassword(password: string) {
    return crypto.createHmac('sha256', password).digest('hex');
  }
  validatePassword(password: string) {
    return this.hashPassword(password) === this.password;
  }
}
