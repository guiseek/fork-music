import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AccountLayoutComponent } from './account-layout.component';
import { OverviewComponent } from './overview/overview.component';
import { TableBackendModule } from '@suite/common/tables/table-backend';
import { DynamicFormModule } from '@suite/common/forms/dynamic-form';
import { SharedAccountModule, AccountResolverService } from '@suite/account/shared/account';
import { UiKitModule } from '@suite/ui-kit';

import { FlexLayoutModule } from '@angular/flex-layout';

import { MatCardModule, MatButtonModule, MatSnackBarModule, MatToolbarModule, MatIconModule, MatListModule, MatMenuModule, MatTabsModule, MatProgressSpinnerModule } from '@angular/material';
import { DialogModule } from '@suite/cdk/dialog';
import { SignupComponent } from './signup/signup.component';

const modules = [
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
    SharedAccountModule,
    TableBackendModule,
    DynamicFormModule,
    DialogModule,
    UiKitModule,
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
        ],
        resolve: {
          account: AccountResolverService
        }
      },
      { path: '/up', component: SignupComponent },
      
      /* {path: '', pathMatch: 'full', component: InsertYourComponentHere} */
    ])
  ],
  declarations: [AccountLayoutComponent, OverviewComponent, SignupComponent]
})
export class AccountModule { }
