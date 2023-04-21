import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResisterDoctorComponent } from './resister-doctor.component';

describe('ResisterDoctorComponent', () => {
  let component: ResisterDoctorComponent;
  let fixture: ComponentFixture<ResisterDoctorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResisterDoctorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResisterDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
