import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { AccountSidebarComponent } from './account-sidebar/account-sidebar.component';
import { AccountPageComponent } from './account-page/account-page.component';
import { MatGridListModule, MatMenuModule, MatIconModule, MatCardModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatRadioModule, MatCheckboxModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { ToolbarModule } from '@suite/nav/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';

const modules = [
  // LayoutModule,
  CommonModule,
  FlexLayoutModule,
  ToolbarModule,
  ReactiveFormsModule,
  MatGridListModule,
  MatMenuModule,
  MatIconModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatSelectModule,
  MatRadioModule,
  MatCheckboxModule
]
export const accountUiRoutes: Route[] = [
  { path: '', component: AccountPageComponent }
];

@NgModule({
  imports: [
    ...modules,
    RouterModule.forChild(accountUiRoutes)
  ],
  declarations: [
    AccountPageComponent,
    AccountSidebarComponent
  ]
})
export class AccountUiModule {}
