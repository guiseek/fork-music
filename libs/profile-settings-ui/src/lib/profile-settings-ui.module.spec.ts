import { async, TestBed } from '@angular/core/testing';
import { ProfileSettingsUiModule } from './profile-settings-ui.module';

describe('ProfileSettingsUiModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ProfileSettingsUiModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(ProfileSettingsUiModule).toBeDefined();
  });
});
