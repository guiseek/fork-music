import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { ToolbarModule } from '@suite/nav/toolbar';
import { SidenavModule } from '@suite/nav/sidenav';

import { LayoutModule } from '@angular/cdk/layout';
import { MatGridListModule, MatMenuModule, MatIconModule, MatCardModule, MatButtonModule, MatSidenavModule } from '@angular/material';
import { NavigatorModule } from '@suite/nav/navigator';

import { dashboardMenu } from '@suite/data';

const modules = [
  LayoutModule,
  MatGridListModule,
  MatSidenavModule,
  MatMenuModule,
  MatIconModule,
  MatCardModule,
  MatButtonModule
]
@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    ...modules,
    ToolbarModule,
    SidenavModule,
    NavigatorModule.forRoot(dashboardMenu),
    RouterModule.forChild([
      /* {path: '', pathMatch: 'full', component: InsertYourComponentHere} */
      { path: '', component: DashboardComponent  },
      
    ])
  ]
})
export class DashboardModule {}
