import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompleteAppointemntListComponent } from './complete-appointemnt-list.component';

describe('CompleteAppointemntListComponent', () => {
  let component: CompleteAppointemntListComponent;
  let fixture: ComponentFixture<CompleteAppointemntListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompleteAppointemntListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompleteAppointemntListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
