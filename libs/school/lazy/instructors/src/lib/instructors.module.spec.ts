import { async, TestBed } from '@angular/core/testing';
import { InstructorsModule } from './instructors.module';

describe('InstructorsModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [InstructorsModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(InstructorsModule).toBeDefined();
  });
});
