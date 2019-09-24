import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileFormComponent } from './profile-form/profile-form.component';
import { CompanyFormComponent } from './company-form/company-form.component';
import { PermissionFormComponent } from './permission-form/permission-form.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ProfileFormComponent, CompanyFormComponent, PermissionFormComponent],
  exports: [ProfileFormComponent, CompanyFormComponent, PermissionFormComponent]
})
export class AccountFormModule {}
