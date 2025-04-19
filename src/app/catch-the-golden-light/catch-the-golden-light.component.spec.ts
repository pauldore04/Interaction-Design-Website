import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatchTheGoldenLightComponent } from './catch-the-golden-light.component';

describe('CatchTheGoldenLightComponent', () => {
  let component: CatchTheGoldenLightComponent;
  let fixture: ComponentFixture<CatchTheGoldenLightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CatchTheGoldenLightComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatchTheGoldenLightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
