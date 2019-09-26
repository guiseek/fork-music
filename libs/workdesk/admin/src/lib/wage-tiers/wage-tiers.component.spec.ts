import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WageTiersComponent } from './wage-tiers.component';

describe('WageTiersComponent', () => {
  let component: WageTiersComponent;
  let fixture: ComponentFixture<WageTiersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WageTiersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WageTiersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
