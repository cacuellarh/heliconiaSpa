import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPlanSectionComponent } from './card-plan-section.component';

describe('CardPlanSectionComponent', () => {
  let component: CardPlanSectionComponent;
  let fixture: ComponentFixture<CardPlanSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardPlanSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardPlanSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
