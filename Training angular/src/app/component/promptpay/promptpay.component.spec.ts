import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PromptpayComponent } from './promptpay.component';

describe('PromptpayComponent', () => {
  let component: PromptpayComponent;
  let fixture: ComponentFixture<PromptpayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PromptpayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PromptpayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
