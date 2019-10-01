import { Module } from '@nestjs/common';
import { AccountService } from './account.service';
import { UserAccountService } from './services/user-account.service';
import { InGroupService } from './services/in-group.service';
import { IncludeService } from './services/include.service';
import { OfferService } from './services/offer.service';
import { OptionIncludedService } from './services/option-included.service';
import { OptionService } from './services/option.service';
import { PlanHistoryService } from './services/plan-history.service';
import { PlanService } from './services/plan.service';
import { PrerequisiteService } from './services/prerequisite.service';
import { SoftwareService } from './services/software.service';
import { SubscriptionService } from './services/subscription.service';
import { UserGroupTypeService } from './services/user-group-type.service';
import { UserGroupService } from './services/user-group.service';
import { InGroupController } from './controllers/in-group.controller';
import { IncludeController } from './controllers/include.controller';
import { OfferController } from './controllers/offer.controller';
import { OptionIncludedController } from './controllers/option-included.controller';
import { OptionController } from './controllers/option.controller';
import { PlanHistoryController } from './controllers/plan-history.controller';
import { PlanController } from './controllers/plan.controller';
import { PrerequisiteController } from './controllers/prerequisite.controller';
import { SoftwareController } from './controllers/software.controller';
import { SubscriptionController } from './controllers/subscription.controller';
import { UserAccountController } from './controllers/user-account.controller';
import { UserGroupTypeController } from './controllers/user-group-type.controller';
import { UserGroupController } from './controllers/user-group.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ACCOUNT_ENTITIES } from '@suite/entities';
// import { PassportModule } from '@nestjs/passport';
// import { JwtModule } from '@nestjs/jwt';
import { InUserAccountController } from './controllers/in-user-account.controller';
import { InUserAccountService } from './services/in-user-account.service';

@Module({
  imports: [
    // PassportModule.register({ defaultStrategy: 'jwt' }),
    // JwtModule.register({
    //   secret: 'secret',
    //   signOptions: { expiresIn: '60s' }
    // }),
    // PassportModule,
    // JwtModule.register({
    //   secret: 'mySecret',
    //   signOptions: { expiresIn: '60s' }
    // }),
    TypeOrmModule.forFeature([
      ...ACCOUNT_ENTITIES
    ])
  ],
  providers: [
    AccountService,
    UserAccountService,
    InGroupService,
    IncludeService,
    OfferService,
    OptionIncludedService,
    OptionService,
    PlanHistoryService,
    PlanService,
    PrerequisiteService,
    SoftwareService,
    SubscriptionService,
    UserGroupTypeService,
    UserGroupService,
    InUserAccountService
  ],
  exports: [
    AccountService,
    UserAccountService,
    InGroupService,
    IncludeService,
    OfferService,
    OptionIncludedService,
    OptionService,
    PlanHistoryService,
    PlanService,
    PrerequisiteService,
    SoftwareService,
    SubscriptionService,
    UserGroupTypeService,
    UserGroupService,
    InUserAccountService
  ],
  controllers: [
    InGroupController,
    IncludeController,
    OfferController,
    OptionIncludedController,
    OptionController,
    PlanHistoryController,
    PlanController,
    PrerequisiteController,
    SoftwareController,
    SubscriptionController,
    UserAccountController,
    UserGroupTypeController,
    UserGroupController,
    InUserAccountController
  ],
})
export class AccountModule {}
