import { async, TestBed } from '@angular/core/testing';
import { SidenavModule } from './sidenav.module';

describe('SidenavModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SidenavModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(SidenavModule).toBeDefined();
  });
});
