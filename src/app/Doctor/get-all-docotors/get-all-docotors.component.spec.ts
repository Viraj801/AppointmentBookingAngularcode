import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllDocotorsComponent } from './get-all-docotors.component';

describe('GetAllDocotorsComponent', () => {
  let component: GetAllDocotorsComponent;
  let fixture: ComponentFixture<GetAllDocotorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetAllDocotorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetAllDocotorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
