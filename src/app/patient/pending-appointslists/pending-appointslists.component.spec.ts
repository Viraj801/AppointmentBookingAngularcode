import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingAppointslistsComponent } from './pending-appointslists.component';

describe('PendingAppointslistsComponent', () => {
  let component: PendingAppointslistsComponent;
  let fixture: ComponentFixture<PendingAppointslistsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PendingAppointslistsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PendingAppointslistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
