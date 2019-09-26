import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmployeePageComponent } from './employee-page.component';
import { EmployeeProfileComponent } from './employee-profile/employee-profile.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { AccountFormModule } from '@suite/common/forms/account-form';
import { TeamFormModule } from '@suite/common/forms/team-form';
import { MatCardModule, MatListModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  { path: '', component: EmployeePageComponent, children: [
    { path: '', redirectTo: 'perfil' },
    { path: 'perfil', component: EmployeeProfileComponent },
    { path: 'detalhes', component: EmployeeDetailsComponent }
  ] }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    MatCardModule,
    MatListModule,
    FlexLayoutModule,
    AccountFormModule,
    TeamFormModule,
  ],
  exports: [RouterModule],
  declarations: [EmployeeProfileComponent, EmployeeDetailsComponent]
})
export class EmployeePageRoutingModule { }
