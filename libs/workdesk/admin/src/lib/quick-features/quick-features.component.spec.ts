import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickFeaturesComponent } from './quick-features.component';

describe('QuickFeaturesComponent', () => {
  let component: QuickFeaturesComponent;
  let fixture: ComponentFixture<QuickFeaturesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuickFeaturesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuickFeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
