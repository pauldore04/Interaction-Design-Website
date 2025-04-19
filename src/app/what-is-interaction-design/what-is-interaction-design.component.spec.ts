import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatIsInteractionDesignComponent } from './what-is-interaction-design.component';

describe('WhatIsInteractionDesignComponent', () => {
  let component: WhatIsInteractionDesignComponent;
  let fixture: ComponentFixture<WhatIsInteractionDesignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhatIsInteractionDesignComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhatIsInteractionDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
