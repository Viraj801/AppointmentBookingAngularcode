import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemooComponent } from './demoo.component';

describe('DemooComponent', () => {
  let component: DemooComponent;
  let fixture: ComponentFixture<DemooComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemooComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemooComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
