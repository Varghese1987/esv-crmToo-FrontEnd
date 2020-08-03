import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadManageComponent } from './lead-manage.component';

describe('LeadManageComponent', () => {
  let component: LeadManageComponent;
  let fixture: ComponentFixture<LeadManageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeadManageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeadManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
