import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AdminLayoutComponent } from './admin-layout.component';
import { OverviewComponent } from './overview/overview.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { TeamComponent } from './team/team.component';
import { ServicesComponent } from './services/services.component';
import { CalendarComponent } from './calendar/calendar.component';
import { AccountComponent } from './account/account.component';
import { SettingsComponent } from './settings/settings.component';
import { CustomersComponent } from './customers/customers.component';

import { ToolbarModule } from '@suite/nav/toolbar';
import { SidenavModule } from '@suite/nav/sidenav';

import { LayoutModule } from '@angular/cdk/layout';
import {
  MatGridListModule,
  MatMenuModule,
  MatIconModule,
  MatCardModule,
  MatButtonModule,
  MatSidenavModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatDialogModule,
  MatProgressSpinnerModule,
  MatFormFieldModule,
  MatInputModule,
  MatToolbarModule,
  MatSnackBarModule
} from '@angular/material';
import { NavigatorModule } from '@suite/nav/navigator';
import { AddressFormModule } from '@suite/common/forms/address-form';
import { DialogModule } from '@suite/cdk/dialog';

import { dashboardMenu, adminMenu } from '@suite/data';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { BillingModule } from '@suite/modules/billing';
import { TableBackendModule } from '@suite/common/tables/table-backend';

import { WageTiersComponent } from './wage-tiers/wage-tiers.component';
import { EmployeeResolverService, CoreModule } from '@suite/common/core';
import { HttpClientModule } from '@angular/common/http';
import { DynamicFormModule } from '@suite/common/forms/dynamic-form';
import { UiKitModule } from '@suite/ui-kit';

const modules = [
  LayoutModule,
  MatToolbarModule,
  MatGridListModule,
  MatSidenavModule,
  MatFormFieldModule,
  MatInputModule,
  MatMenuModule,
  MatIconModule,
  MatCardModule,
  MatButtonModule,
  MatDialogModule,
  MatTableModule,
  MatSnackBarModule,
  MatPaginatorModule,
  MatSortModule,
  MatProgressSpinnerModule,
  FlexLayoutModule
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    ...modules,
    ToolbarModule,
    SidenavModule,
    AddressFormModule,
    BillingModule,
    DialogModule,
    UiKitModule,
    DynamicFormModule,
    TableBackendModule,
    NavigatorModule.forRoot(adminMenu),
    RouterModule.forChild([
      /* {path: '', pathMatch: 'full', component: InsertYourComponentHere} */
      {
        path: '',
        component: AdminLayoutComponent,
        children: [
          { path: '', component: OverviewComponent },
          { path: 'calendario', component: CalendarComponent },
          { path: 'notificacoes', component: NotificationsComponent },
          { path: 'servicos', component: ServicesComponent },
          { path: 'equipe', component: TeamComponent },
          { path: 'conta', component: AccountComponent },
          { path: 'configuracoes', component: SettingsComponent },
          { path: 'niveis-salariais', component: WageTiersComponent },
          {
            path: 'equipe/:id',
            loadChildren: () =>
              import('./team/employee-page/employee-page.module').then(
                m => m.EmployeePageModule
              ),
            resolve: {
              employee: EmployeeResolverService
            }
          },
          {
            path: 'salas',
            loadChildren: () =>
              import('@suite/school/lazy/classrooms').then(
                module => module.ClassroomsModule
              )
          },
          { path: 'recursos', loadChildren: () => import('./quick-features/quick-features.module').then(m => m.QuickFeaturesModule) },
        ]
      },
      {
        path: 'quick-start',
        loadChildren: () =>
          import('@suite/quick-start/admin').then(
            module => module.QuickStartAdminModule
          )
      }
      
    ])
  ],
  providers: [EmployeeResolverService],
  declarations: [
    AdminLayoutComponent,
    OverviewComponent,
    NotificationsComponent,
    TeamComponent,
    ServicesComponent,
    CalendarComponent,
    AccountComponent,
    SettingsComponent,
    CustomersComponent,
    WageTiersComponent
  ]
})
export class WorkdeskAdminModule {}
