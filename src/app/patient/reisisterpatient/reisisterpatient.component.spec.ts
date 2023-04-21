import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReisisterpatientComponent } from './reisisterpatient.component';

describe('ReisisterpatientComponent', () => {
  let component: ReisisterpatientComponent;
  let fixture: ComponentFixture<ReisisterpatientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReisisterpatientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReisisterpatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
