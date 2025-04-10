import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanCategoryComponent } from './plan-category.component';

describe('PlanCategoryComponent', () => {
  let component: PlanCategoryComponent;
  let fixture: ComponentFixture<PlanCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlanCategoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
