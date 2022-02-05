import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestrauntListComponent } from './restraunt-list.component';

describe('RestrauntListComponent', () => {
  let component: RestrauntListComponent;
  let fixture: ComponentFixture<RestrauntListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestrauntListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestrauntListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
