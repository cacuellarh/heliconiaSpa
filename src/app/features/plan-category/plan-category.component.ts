import { Component, DestroyRef, inject } from '@angular/core';
import { HeaderSizeWrapperComponent } from '../layaout/components/header-size-wrapper/header-size-wrapper.component';
import { PlanService } from './services/plan.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { PlanDto } from './dto/plan-dto';
import { PlanCardComponent } from './components/plan-card/plan-card.component';
import { CommonModule } from '@angular/common';
import { CategoryType } from './types/category-type';
import { FilterPlanFormComponent } from './components/filter-plan-form/filter-plan-form.component';
import { FilterPlansRequest } from './types/filterPlans-request';
import { FormsModule } from '@angular/forms';
import { ElementActiveDirective } from '@c-code/c-code-fw';
import { ElementActiveService } from '@c-code/c-code-fw';
import { WhatsappApiComponent } from "../layaout/components/whatsapp-api/whatsapp-api.component";

@Component({
  selector: 'app-plan-category',
  imports: [
    HeaderSizeWrapperComponent,
    PlanCardComponent,
    CommonModule,
    FilterPlanFormComponent,
    FormsModule,
    ElementActiveDirective,
    WhatsappApiComponent
],
  templateUrl: './plan-category.component.html',
  styleUrl: './plan-category.component.css',
  providers:[ElementActiveService]
})
export class PlanCategoryComponent {
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
      this.plans = plans
    })
  }
}
