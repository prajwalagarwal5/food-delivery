import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SigninAsCustomerComponent } from './signin-as-customer.component';

describe('SigninAsCustomerComponent', () => {
  let component: SigninAsCustomerComponent;
  let fixture: ComponentFixture<SigninAsCustomerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SigninAsCustomerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SigninAsCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
