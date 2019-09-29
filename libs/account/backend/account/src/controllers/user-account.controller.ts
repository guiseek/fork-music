import { Controller, UseInterceptors, Post, Get, Param, NotFoundException, BadRequestException, HttpCode, HttpStatus } from '@nestjs/common';
import { CrudController, Crud, CrudRequest, Override, ParsedRequest, ParsedBody, CrudRequestInterceptor } from '@nestjsx/crud';
import { UserAccountService } from '../services/user-account.service';

import { UserAccount } from '@suite/entities';
import { CreateUserAccountDto } from '../dtos';
import { HttpErrorResponse } from '@angular/common/http';

@Crud({
  model: {
    type: UserAccount
  }
})
@Controller('account/user-account')
export class UserAccountController implements CrudController<UserAccount> {
  constructor(
    public service: UserAccountService
  ) { }
  get base(): CrudController<CreateUserAccountDto> {
    return this;
  }
  get register(): CrudController<UserAccount> {
    return this;
  }
  @Override()
  createOne(
    @ParsedRequest() req: CrudRequest,
    @ParsedBody() dto: CreateUserAccountDto,
  ) {
    // const confirmationCode = ("" + Math.random()).substring(2, 7)

    // Math.floor(Math.random() * 90000) + 10000;
    return this.base.createOneBase(req, dto)
    // this.service.createOne(
    //   req, Object.assign({ ...dto, confirmationCode })
    // )
    // return this.register.createOneBase(
    //   req,
    //   { ...dto, confirmationCode }
    // );
  }
  @HttpCode(HttpStatus.ACCEPTED)
  @Get('confirmation/:code')
  // async exportSome(@ParsedRequest() req: CrudRequest) {
  async confirmation(@Param('code') code: string) {
    const account = await this.service.findOne({
      confirmationCode: code
    })
    if (account) {
      // account.confirmationTime = new Date()
      // this.service.updateOne()
      try {
        const save = await account.save({
          data: {
            confirmationTime: new Date()
          }
        })
        return {
          message: 'Conta verificada!'
        }
      } catch (err) {
        return err
      }
      // return account.save()
    }
    return new BadRequestException('Código não encontrado')
  }

  // @UseInterceptors(CrudRequestInterceptor)
  // @Get('/confirmation/:code')
  // // async exportSome(@ParsedRequest() req: CrudRequest) {
  // async confirmation(@Param('code') code: string) {
  //   // some awesome feature handling
  //   const account = await this.service.findOne({
  //     co
  //   })
  // }
}
