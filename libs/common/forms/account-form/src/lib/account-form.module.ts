import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileFormComponent } from './profile-form/profile-form.component';
import { CompanyFormComponent } from './company-form/company-form.component';
import { PermissionFormComponent } from './permission-form/permission-form.component';
import { ProfilePhotoFormComponent } from './profile-photo-form/profile-photo-form.component';
import { MatFormFieldModule, MatInputModule, MatSelectModule, MatDatepickerModule, MatNativeDateModule, MatButtonModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';

const modules = [
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatButtonModule,
  FlexLayoutModule
]
@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ...modules
  ],
  declarations: [ProfileFormComponent, CompanyFormComponent, PermissionFormComponent, ProfilePhotoFormComponent],
  exports: [ProfileFormComponent, CompanyFormComponent, PermissionFormComponent, ProfilePhotoFormComponent]
})
export class AccountFormModule {}
