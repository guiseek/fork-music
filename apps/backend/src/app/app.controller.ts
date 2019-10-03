import { Controller, Get } from '@nestjs/common';

import { AppService } from './app.service';
import { InUserAccountDto } from 'backend/account/dtos';
import { getPlain } from '@suite/utils';
import { IUserAccount } from '@suite/interfaces';
import { UserGroupType, UserAccount } from '@suite/entities';
import { Validator } from 'class-validator';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getData() {
    const validator = new Validator()
    const user = new UserAccount()
    
    const account = loggingIdentity([UserAccount, UserGroupType])
    console.log(account)
    // Object.keys(acc)
    for (const p in account) {
      if (p) {
        console.log(typeof p, p)
      }
    }
    return {}
    // const plain = getPlain(UserAccount)
    // return plain
    // return this.appService.getData();
  }
}

function loggingIdentity<T>(arg: T[]): T[] {
  console.log(arg.length);  // Array has a .length, so no more error
  return arg;
}