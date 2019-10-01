import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MembersComponent } from './members.component';
import { GroupsComponent } from './groups/groups.component';
import { UsersComponent } from './users/users.component';
import { DialogModule } from '@suite/cdk/dialog';
import { MatButtonModule, MatCardModule, MatListModule, MatIconModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TableBackendModule } from '@suite/common/tables/table-backend';
import { SharedAccountModule } from '@suite/account/shared/account';
import { EduHelperModule } from '@suite/nav/edu-helper';


const routes: Routes = [
  { path: '', component: MembersComponent, children: [
    { path: 'usuarios', component: UsersComponent },
    { path: 'grupos', component: GroupsComponent },
    { path: '', redirectTo: 'usuarios' }
  ] }
];

const modules = [
  MatButtonModule,
  MatCardModule,
  MatListModule,
  MatIconModule
]
@NgModule({
  declarations: [MembersComponent, GroupsComponent, UsersComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    TableBackendModule,
    SharedAccountModule,
    EduHelperModule,
    DialogModule,
    ...modules,
    RouterModule.forChild(routes)
  ]
})
export class MembersModule { }
