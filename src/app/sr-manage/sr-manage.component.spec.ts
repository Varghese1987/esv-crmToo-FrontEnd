import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SrManageComponent } from './sr-manage.component';

describe('SrManageComponent', () => {
  let component: SrManageComponent;
  let fixture: ComponentFixture<SrManageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SrManageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SrManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
