import { async, TestBed } from '@angular/core/testing';
import { TableBackendModule } from './table-backend.module';

describe('TableBackendModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [TableBackendModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(TableBackendModule).toBeDefined();
  });
});
