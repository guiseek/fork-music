import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AccountLayoutComponent } from './account-layout.component';
import { OverviewComponent } from './overview/overview.component';
import { TableBackendModule } from '@suite/common/tables/table-backend';
import { DynamicFormModule } from '@suite/common/forms/dynamic-form';
import { SharedAccountModule, AccountResolverService } from '@suite/account/shared/account';
import { UiKitModule } from '@suite/ui-kit';
import { CardsModule } from '@suite/common/cards';
import { EduHelperModule } from '@suite/nav/edu-helper';

import { FlexLayoutModule } from '@angular/flex-layout';

import { MatCardModule, MatButtonModule, MatSnackBarModule, MatToolbarModule, MatIconModule, MatListModule, MatMenuModule, MatTabsModule, MatProgressSpinnerModule, MatGridListModule } from '@angular/material';
import { DialogModule } from '@suite/cdk/dialog';
import { SignupComponent } from './signup/signup.component';
import { SharedAuthModule, TokenInterceptor } from '@suite/account/shared/auth';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { DragDropModule } from '@angular/cdk/drag-drop';

const modules = [
  MatGridListModule,
  DragDropModule,
  MatToolbarModule,
  MatCardModule,
  MatButtonModule,
  MatSnackBarModule,
  MatToolbarModule,
  MatListModule,
  MatMenuModule,
  MatIconModule,
  MatTabsModule,
  MatProgressSpinnerModule
]

@NgModule({
  imports: [
    CommonModule,
    SharedAuthModule,
    SharedAccountModule,
    TableBackendModule,
    DynamicFormModule,
    DialogModule,
    UiKitModule,
    CardsModule,
    EduHelperModule.forRoot(),
    FlexLayoutModule,
    ...modules,
    RouterModule.forChild([
      {
        path: '',
        component: AccountLayoutComponent,
        children: [
          { path: '', component: OverviewComponent },
          { path: 'membros', loadChildren: () => import('./members/members.module').then(m => m.MembersModule) },
          { path: 'assinaturas', loadChildren: () => import('./subscriptions/subscriptions.module').then(m => m.SubscriptionsModule) },
          { path: 'instrutores', loadChildren: () => import('@suite/school/lazy/instructors').then(module => module.InstructorsModule ) }
        ],
        // resolve: {
        //   account: AccountResolverService
        // }
      },
      { path: '/up', component: SignupComponent },
      
      /* {path: '', pathMatch: 'full', component: InsertYourComponentHere} */
    ])
  ],
  declarations: [AccountLayoutComponent, OverviewComponent, SignupComponent],
  providers: [
    { provide: HTTP_INTERCEPTORS, multi: true, useClass: TokenInterceptor }
  ]
})
export class AccountModule { }
