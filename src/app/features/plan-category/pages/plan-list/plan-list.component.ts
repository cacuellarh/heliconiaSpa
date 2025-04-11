import { Component, DestroyRef, inject } from '@angular/core';
import { PlanService } from '../../services/plan.service';
import { PlanDto } from '../../dto/plan-dto';
import { CategoryType } from '../../types/category-type';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FilterPlansRequest } from '../../types/filterPlans-request';
import { PlanCardComponent } from '../../components/plan-card/plan-card.component';
import { CommonModule } from '@angular/common';
import { FilterPlanFormComponent } from '../../components/filter-plan-form/filter-plan-form.component';
import { FormsModule } from '@angular/forms';
import { ElementActiveDirective, ElementActiveService } from '@c-code/c-code-fw';


@Component({
  selector: 'app-plan-list',
  imports: [
    PlanCardComponent,
    CommonModule,
    FilterPlanFormComponent,
    FormsModule,
    ElementActiveDirective,
  ],
  templateUrl: './plan-list.component.html',
  styleUrl: './plan-list.component.css',
  providers:[ElementActiveService]
})
export class PlanListComponent {
  private planService: PlanService = inject(PlanService);
  private destroyRef: DestroyRef = inject(DestroyRef);
  public plans: PlanDto[] = [];
  public categorySelected: CategoryType = CategoryType.Individual;
  public CategoryType = CategoryType;
  public filterByPlanName: string = '';

  ngOnInit() {
    this.getPlans(this.categorySelected);
  }

  selectCategory(category: CategoryType) {
    this.categorySelected = category;
    this.getPlans(this.categorySelected);
  }

  getPlans(category: CategoryType) {
    this.planService
      .getPlansByCategory(category)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((plans: PlanDto[]) => {
        this.plans = plans;
        console.log(plans);
      });
  }

  filterPlans(filter: FilterPlansRequest) {
    this.planService
      .getPlansByFilter(filter)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((plans) => {
        this.plans = plans;
      });
  }

  onFilterByPlanName() {
    this.planService
      .getPlansByName(this.filterByPlanName)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((plans) => {
        this.plans = plans;
      });
  }
}
