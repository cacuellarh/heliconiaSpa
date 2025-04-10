import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { PlanDto } from '../dto/plan-dto';
import { AdditionalServiceDto } from '../dto/AdditionalService-dto';
import { filter, forkJoin, map, Observable } from 'rxjs';
import { CategoryType } from '../types/category-type';
import { PriceRangeDto } from '../dto/priceRange-dto';
import { FilterPlansRequest } from '../types/filterPlans-request';

@Injectable({
  providedIn: 'root',
})
export class PlanService {
  private httpService: HttpClient = inject(HttpClient);

  getPlans(): Observable<PlanDto[]> {
    return forkJoin({
      plans: this.httpService.get<PlanDto[]>('assets/data/plans.json'),
      additionals: this.httpService.get<AdditionalServiceDto[]>(
        'assets/data/additionals.json'
      ),
    }).pipe(
      map(({ plans, additionals }) => {
        return plans.map((plan) => {
          plan.additionalServices = plan.additionalServicesId.map((id) => {
            return additionals.find((service) => service.id === id)!;
          });
          return plan;
        });
      })
    );
  }

  getPriceRanges() {
    return this.httpService.get<PriceRangeDto[]>(
      'assets/data/priceRanges.json'
    );
  }

  getPlansByFilter(filter: FilterPlansRequest): Observable<PlanDto[]> {
    return this.getPlans().pipe(
      map((plans) =>
        plans.filter((p) => {
          const matchesService = !filter.service || p.additionalServices.some(
            additional => additional.id === filter.service.id
          );
  
          const matchesPrice = !filter.priceRange || (
            p.price <= filter.priceRange.max && p.price > filter.priceRange.min
          );
  
          return matchesService && matchesPrice;
        })
      )
    );
  }

  getPlansByCategory(category: CategoryType) {
    return this.getPlans().pipe(
      map((plans) => plans.filter((plan) => plan.category === category))
    );
  }

  getPlansByName(name: string) {
    return this.getPlans().pipe(
      map((plans) =>
        plans.filter((plan) =>
          plan.name.toLowerCase().includes(name.toLowerCase())
        )
      )
    );
  }
}
