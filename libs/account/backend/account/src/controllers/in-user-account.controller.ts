import { Controller, Post, UseGuards, Request, Body } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { InUserAccountService } from '../services/in-user-account.service';
import { CreateUserInGroupDto } from '../dtos';
import { UserGroup, InGroup } from '@suite/entities';
import { Transaction } from 'typeorm';

@Controller('account/in-user-account')
export class InUserAccountController {
  constructor(
    private readonly inUserAccountService: InUserAccountService
  ) { }
  // @Post()
  // @UseGuards(AuthGuard('jwt'))
  // public me(@Request() req) {
  //   console.log('credential: ', req.user)
  //   // return this.inUserAccountService.login(req.user)
  // }
  // @Post()
  // @UseGuards(AuthGuard('jwt'))
  // // @Transaction()
  // async in(@Request() req, @Body() body: CreateUserInGroupDto) {
  //   const userAccount = await this.inUserAccountService.findOne(req.user)
  //   console.log(userAccount)
  //   console.log('credential: ', req.user)
  //   console.log('body: ', body)


  //   const { userGroup, ...inGroupValue } = body
  //   const userGroupEntity = new UserGroup()
  //   userGroupEntity.userGroupType = {
  //     id: 1,
  //     typeName: "Pequenas escolas",
  //     membersMin: 1,
  //     membersMax: 50
  //   }
  //   userGroupEntity.customerInvoiceData = 'texto'
  //   const newUserGroup = await userGroupEntity.save(
  //     Object.assign({}, body.userGroup)
  //   )
  //   const inGroupEntity = new InGroup()
  //   inGroupEntity.userGroup = newUserGroup
  //   inGroupEntity.groupAdmin = true
  //   inGroupEntity.userAccount = inGroupValue.userAccount

  //   // inGroupEntity = Object.assign(
  //   //   {}, inGroupValue, { userGroup: newUserGroup }
  //   // )
  //   // newUserGroup.inGroups
  //   // inGroupEntity.userGroup = newUserGroup

  //   userAccount.inGroups = [inGroupEntity]
  //   return await userAccount.save()
  //   // return this.inUserAccountService.login(req.user)
  // }
}
