import { async, TestBed } from '@angular/core/testing';
import { ReportingUiStatDashboardUiModule } from './reporting-ui-stat-dashboard-ui.module';

describe('ReportingUiStatDashboardUiModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReportingUiStatDashboardUiModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(ReportingUiStatDashboardUiModule).toBeDefined();
  });
});
