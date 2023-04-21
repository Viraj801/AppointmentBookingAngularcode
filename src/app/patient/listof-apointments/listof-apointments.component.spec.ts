import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListofApointmentsComponent } from './listof-apointments.component';

describe('ListofApointmentsComponent', () => {
  let component: ListofApointmentsComponent;
  let fixture: ComponentFixture<ListofApointmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListofApointmentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListofApointmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
