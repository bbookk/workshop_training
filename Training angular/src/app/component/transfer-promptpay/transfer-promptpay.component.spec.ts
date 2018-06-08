import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferPromptpayComponent } from './transfer-promptpay.component';

describe('TransferPromptpayComponent', () => {
  let component: TransferPromptpayComponent;
  let fixture: ComponentFixture<TransferPromptpayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransferPromptpayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferPromptpayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
