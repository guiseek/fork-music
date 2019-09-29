import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountDropdownComponent } from './dropdown/dropdown.component';
import { MatButtonModule, MatIconModule, MatMenuModule, MatListModule, MatCardModule } from '@angular/material';
import { AuthModule } from '@suite/auth/shared/auth';
import { RouterModule } from '@angular/router';
import { UserInGroupComponent } from './user-in-group/user-in-group.component';
import { FlexLayoutModule } from '@angular/flex-layout';

const modules = [
  MatMenuModule,
  MatButtonModule,
  MatIconModule,
  MatListModule,
  MatCardModule
]

@NgModule({
  imports: [
    CommonModule,
    AuthModule,
    RouterModule,
    FlexLayoutModule,
    ...modules
  ],
  declarations: [AccountDropdownComponent, UserInGroupComponent],
  exports: [AccountDropdownComponent, UserInGroupComponent]
})
export class SharedAccountModule { }
