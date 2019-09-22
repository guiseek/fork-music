import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { ProfileSettingsPageComponent } from './profile-settings-page/profile-settings-page.component';

export const profileSettingsUiRoutes: Route[] = [{
  path: '',
  component: ProfileSettingsPageComponent
}];

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [ProfileSettingsPageComponent]
})
export class ProfileSettingsUiModule {}
