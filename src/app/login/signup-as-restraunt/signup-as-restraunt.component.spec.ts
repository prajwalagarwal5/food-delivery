import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupAsRestrauntComponent } from './signup-as-restraunt.component';

describe('SignupAsRestrauntComponent', () => {
  let component: SignupAsRestrauntComponent;
  let fixture: ComponentFixture<SignupAsRestrauntComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupAsRestrauntComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupAsRestrauntComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
