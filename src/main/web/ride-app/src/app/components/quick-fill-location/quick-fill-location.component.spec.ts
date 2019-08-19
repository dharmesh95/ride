import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickFillLocationComponent } from './quick-fill-location.component';

describe('QuickFillLocationComponent', () => {
  let component: QuickFillLocationComponent;
  let fixture: ComponentFixture<QuickFillLocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuickFillLocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuickFillLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
