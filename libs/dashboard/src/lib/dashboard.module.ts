import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { ToolbarModule } from '@suite/layout/toolbar';
import { LayoutModule } from '@angular/cdk/layout';
import { MatGridListModule, MatMenuModule, MatIconModule, MatCardModule, MatButtonModule } from '@angular/material';

const modules = [
  LayoutModule,
  MatGridListModule,
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
    RouterModule.forChild([
      /* {path: '', pathMatch: 'full', component: InsertYourComponentHere} */
      { path: '', component: DashboardComponent  },
      
    ])
  ]
})
export class DashboardModule {}
