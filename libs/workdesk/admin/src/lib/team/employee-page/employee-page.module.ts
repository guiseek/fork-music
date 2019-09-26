import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { TeamFormModule } from '@suite/common/forms/team-form';
import { AccountFormModule } from '@suite/common/forms/account-form';

import { EmployeePageRoutingModule } from './employee-page-routing.module';
import { EmployeePageComponent } from './employee-page.component';
import { MatTabsModule, MatCardModule, MatFormFieldModule, MatInputModule, MatButtonModule } from '@angular/material';

const modules = [
  MatTabsModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule
]

const routes: Routes = [
  { path: '', component: EmployeePageComponent }
];

@NgModule({
  declarations: [EmployeePageComponent],
  imports: [
    CommonModule,
    ...modules,
    EmployeePageRoutingModule,
    RouterModule.forChild(routes)
  ]
})
export class EmployeePageModule { }
