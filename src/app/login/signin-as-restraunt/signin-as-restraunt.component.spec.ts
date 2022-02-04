import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SigninAsRestrauntComponent } from './signin-as-restraunt.component';

describe('SigninAsRestrauntComponent', () => {
  let component: SigninAsRestrauntComponent;
  let fixture: ComponentFixture<SigninAsRestrauntComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SigninAsRestrauntComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SigninAsRestrauntComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
