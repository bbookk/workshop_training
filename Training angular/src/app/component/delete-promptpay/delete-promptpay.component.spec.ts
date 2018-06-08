import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletePromptpayComponent } from './delete-promptpay.component';

describe('DeletePromptpayComponent', () => {
  let component: DeletePromptpayComponent;
  let fixture: ComponentFixture<DeletePromptpayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeletePromptpayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletePromptpayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
