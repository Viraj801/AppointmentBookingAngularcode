import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrantpageComponent } from './frantpage.component';

describe('FrantpageComponent', () => {
  let component: FrantpageComponent;
  let fixture: ComponentFixture<FrantpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrantpageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FrantpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
