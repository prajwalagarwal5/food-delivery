import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupAsCustomerComponent } from './signup-as-customer.component';

describe('SignupAsCustomerComponent', () => {
  let component: SignupAsCustomerComponent;
  let fixture: ComponentFixture<SignupAsCustomerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupAsCustomerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupAsCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
