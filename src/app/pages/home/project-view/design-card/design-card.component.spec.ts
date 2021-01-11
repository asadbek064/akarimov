import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignCardComponent } from './design-card.component';

describe('DesignCardComponent', () => {
  let component: DesignCardComponent;
  let fixture: ComponentFixture<DesignCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesignCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
