import { async, TestBed } from '@angular/core/testing';
import { TicketListUiModule } from './ticket-list-ui.module';

describe('TicketListUiModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [TicketListUiModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(TicketListUiModule).toBeDefined();
  });
});
