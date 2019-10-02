import { Controller, UseInterceptors, Post, Get, Param, NotFoundException, BadRequestException, HttpCode, HttpStatus, ConflictException, Body, UseGuards } from '@nestjs/common';
import { CrudController, Crud, CrudRequest, Override, ParsedRequest, ParsedBody, CrudRequestInterceptor, GetManyDefaultResponse, Action, Feature } from '@nestjsx/crud';
import { UserAccountService } from '../services/user-account.service';

import { UserAccount } from '@suite/entities';
import { CreateUserAccountDto } from '../dtos';
// import { HttpErrorResponse } from '@angular/common/http';
// import { Observable, from } from 'rxjs';
// import { AuthGuard } from '@nestjs/passport';
// import { RoleGuard } from '../guards/role.guard';

@Crud({
  model: {
    type: UserAccount,
  },
  query: {
    join: {
      inGroup: {
        eager: true,
        persist: ['in-group']
      }
    }
  }
  // routes: {
  //   updateOneBase: {
  //     allowParamsOverride: true
  //   }
  // },
})

@Controller('account/user-account')
// @UseGuards(
//   AuthGuard('jwt'),
//   new RoleGuard({
//     readAllRoles: ['admin'],
//     readOneRoles: ['admin'],
//     createOneRoles: ['admin'],
//     updateOneRoles: ['admin'],
//     deleteOneRoles: ['admin']
//   })
// )
export class UserAccountController implements CrudController<UserAccount> {
  constructor(
    public service: UserAccountService
  ) { }
  get base(): CrudController<CreateUserAccountDto> {
    return this;
  }
  get account(): CrudController<UserAccount> {
    return this;
  }
  get register(): CrudController<UserAccount> {
    return this;
  }
  // getManyBase(
  //   @ParsedRequest() req: CrudRequest,
  // ): Promise<GetManyDefaultResponse<T> | T[]>;

  // @Post('in')
  // async in(@Body() credential) {
  //   console.log(credential)
  //   const { email, password } = credential
  //   try {
  //     const find = await this.service.findOne({
  //       email
  //     })
  //     // find.
  //     const user = new UserAccount()
  //     const auth = Object.assign(
  //       find, user, { password }
  //     )
  //     console.log(user)
  //     console.log(auth)
  //     // auth.hashPassword()
  //     if (!!find && (password === auth.password)) {

  //     }
  //     console.log(auth)
  //     return user
  //   } catch (error) {
  //     return new BadRequestException('Credenciais inválidas')
  //   }

  // }
  // @Override('updateOneBase')
  // coolFunction(
  //   @ParsedRequest() req: CrudRequest,
  //   @ParsedBody() dto: UserAccount,
  // ) {
  //   return this.base.updateOneBase(req, dto);
  // }

  // @Override()
  // @UseInterceptors(CrudRequestInterceptor)
  // @Feature('Read')
  // @Action('All')
  // @Get('')
  // getManyBase(
  //   @ParsedRequest() req: CrudRequest
  // ): Promise<GetManyDefaultResponse<UserAccount> | UserAccount[]> {
  //   console.log(req.options)
  //   return this.account.getManyBase(req)
  // }
  @Override()
  async createOne(
    @ParsedRequest() req: CrudRequest,
    @ParsedBody() dto: CreateUserAccountDto,
  ) {
    try {
      const create = await this.base.createOneBase(req, dto)
      console.log('create: ', create)
    } catch (err) {
      if (err.code === 'ER_DUP_ENTRY') {
        throw new ConflictException('Este email já está sendo usado por outro usuário')
      }
      throw new BadRequestException(err.message)
      // console.log('err: ', err)
      // return err
    }
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

        // return err
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
