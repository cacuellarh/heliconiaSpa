import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationPoliciesComponent } from './reservation-policies.component';

describe('ReservationPoliciesComponent', () => {
  let component: ReservationPoliciesComponent;
  let fixture: ComponentFixture<ReservationPoliciesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReservationPoliciesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReservationPoliciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
