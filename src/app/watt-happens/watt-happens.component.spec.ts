import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WattHappensComponent } from './watt-happens.component';

describe('WattHappensComponent', () => {
  let component: WattHappensComponent;
  let fixture: ComponentFixture<WattHappensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WattHappensComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WattHappensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
