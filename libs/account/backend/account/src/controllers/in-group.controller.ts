import { Controller, Post, UseGuards, Request, Body, UseInterceptors } from '@nestjs/common';
import { CrudController, Crud, CrudRequestInterceptor, ParsedBody, ParsedRequest, CrudRequest, Override } from '@nestjsx/crud';
import { InGroup, UserGroup, UserGroupType, UserAccount } from '@suite/entities';
import { InGroupService } from '../services/in-group.service';
import { Transaction, Connection, getConnection, getManager } from 'typeorm';
import { AuthGuard } from '@nestjs/passport';
import { CreateUserInGroupDto } from '../dtos';
import { UserGroupService } from '../services/user-group.service';

@Crud({
  model: {
    type: InGroup
  }
})
@Controller('account/in-group')
export class InGroupController implements CrudController<InGroup> {
  constructor(
    public service: InGroupService,
    public userGroupService: UserGroupService
  ) { }

  get base(): CrudController<CreateUserInGroupDto> {
    return this
  }
  // get userGroup(): CrudController<UserGroup> {
  //   return this.userGroup
  // }

  @Transaction()
  @UseGuards(AuthGuard('jwt'))
  @Override()
  async createOne(
    @ParsedRequest() req: CrudRequest,
    @ParsedBody() dto: CreateUserInGroupDto,
  ) {
    
    // const { userGroup } = dto
    // let ug = new UserGroup()
    // ug = userGroup
    // ug.save()
    // await this.userGroupService.createOne(req, userGroup)
    return this.base.createOneBase(req, dto);
  }
  // @UseInterceptors(CrudRequestInterceptor)
  // @Post('/create')
  // create(@ParsedRequest() req: CrudRequest, @ParsedBody() body, @Body() data) {
  //   const userGroup = new UserGroup()
  //   const inGroup = new InGroup()
    
  //   console.log(req.parsed)
  //   console.log(userGroup)
  //   console.log(body)
  //   return data
  // }
}
