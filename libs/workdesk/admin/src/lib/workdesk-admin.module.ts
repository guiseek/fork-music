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
import { MatGridListModule, MatMenuModule, MatIconModule, MatCardModule, MatButtonModule, MatSidenavModule } from '@angular/material';
import { NavigatorModule } from '@suite/nav/navigator';

import { dashboardMenu, adminMenu } from '@suite/data';
import { FlexLayoutModule } from '@angular/flex-layout';

const modules = [
  LayoutModule,
  MatGridListModule,
  MatSidenavModule,
  MatMenuModule,
  MatIconModule,
  MatCardModule,
  MatButtonModule,
  FlexLayoutModule
]

@NgModule({
  imports: [
    CommonModule,
    ...modules,
    ToolbarModule,
    SidenavModule,
    NavigatorModule.forRoot(adminMenu),
    RouterModule.forChild([
      /* {path: '', pathMatch: 'full', component: InsertYourComponentHere} */
      { path: '', component: AdminLayoutComponent, children: [
        { path: '', component: OverviewComponent },
        { path: 'calendario', component: CalendarComponent },
        { path: 'notificacoes', component: NotificationsComponent },
        { path: 'servicos', component: ServicesComponent },
        { path: 'equipe', component: TeamComponent },
        { path: 'conta', component: AccountComponent },
        { path: 'configuracoes', component: SettingsComponent }
      ] }
    ])
  ],
  declarations: [AdminLayoutComponent, OverviewComponent, NotificationsComponent, TeamComponent, ServicesComponent, CalendarComponent, AccountComponent, SettingsComponent, CustomersComponent]
})
export class WorkdeskAdminModule {}
