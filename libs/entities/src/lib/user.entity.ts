import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BeforeInsert,
  UpdateDateColumn,
  CreateDateColumn,
  ManyToMany,
  JoinTable,
  ManyToOne,
  JoinColumn,
  Unique,
} from 'typeorm';
import * as crypto from 'crypto';
import { Exclude, plainToClassFromExist } from 'class-transformer';
import { State } from './state.entity';
import { City } from './city.entity';
import { Company } from './company.entity';
import { SoftDeletableEntity } from 'common/backend/typeorm';
import { UserRole } from 'auth/backend/users';

@Entity('users')
@Unique(['email'])
export class User extends SoftDeletableEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'varchar',
    length: 100,
    nullable: false
  })
  public email!: string;

  @Column({ nullable: false, select: false })
  public password!: string;

  @Column({ nullable: false, select: false })
  public salt!: string | undefined;

  @Column({ type: Date, nullable: true })
  public emailValidatedAt?: Date | undefined;

  @Column({ nullable: true })
  photo: string;

  @Column({ nullable: true })
  phone: string;

  @ManyToOne(type => State)
  @JoinColumn()
  state: State;

  @ManyToOne(type => City)
  @JoinColumn()
  city: City;

  // @Column({ default: 41 })
  // stateCode: number;

  // @Column({ default: 4115200 })
  // cityCode: number;

  @Column('simple-array')
  roles: string[] = [];

  @Column({
    type: 'char',
    length: 3,
    default: 'own'
  })
  possession: string;

  @Column({ default: true })
  active: boolean;

  // @OneToOne(type => Company, company => company.user, {
  //   onDelete: 'CASCADE',
  //   eager: true
  // }) // specify inverse side as a second parameter
  // @JoinColumn()
  // company: Company;

  @ManyToMany(type => Company, company => company.users)
  @JoinTable({ name: 'user_company' })
  companies: Company[];

  // @ManyToMany(type => Event, event => event.users)
  // @JoinTable({ name: 'user_event' })
  // events: Event[];

  // @OneToMany(type => Event, event => event.createdBy)
  // createdEvents: Event[];

  // @Column({ type: 'varchar', length: 50, nullable: true, default: 'customer' })
  // public role: string;

  // @Column({ type: 'jsonb', default: [], nullable: false })
  // public flags!: string[];

  @UpdateDateColumn()
  updatedAt: Date;

  @CreateDateColumn()
  createdAt: Date

  // @Column({ nullable: false, select: false })
  // public password!: string;

  // @Column({ nullable: false, select: false })
  // public salt!: string;

  // @Column({ length: 100 })
  // @Exclude({ toPlainOnly: true })
  // password: string;

  // @BeforeInsert()
  // hashPassword() {
  //   if (this.password) {
  //     this.password = crypto.createHmac('sha256', this.password).digest('hex');
  //   }
  // }
  // constructor(partial: Partial<User>) {
  //   plainToClassFromExist(this, partial);
  //   // Object.assign(this, partial);
  // }
}