import { async, TestBed } from '@angular/core/testing';
import { EduHelperModule } from './edu-helper.module';

describe('EduHelperModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [EduHelperModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(EduHelperModule).toBeDefined();
  });
});
