import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateSrStatusComponent } from './update-sr-status.component';

describe('UpdateSrStatusComponent', () => {
  let component: UpdateSrStatusComponent;
  let fixture: ComponentFixture<UpdateSrStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateSrStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateSrStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
